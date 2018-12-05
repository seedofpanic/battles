import {randomBytes} from 'crypto';
import {allowedCharacters} from './allowedCharacters';
import {getRandomCharacter} from '../utils/getRandomCharacter';
import {ICombat} from '../models/combat';
import {IPlayer} from '../models/player';
import {Combat} from './combat';
import {IUnit} from '../models/unit';
import {Bot} from './units/bot';
import {ICharacter} from '../models/character';
import {getWinDuelRates, saveWinDuelRates, WinDuelRatesStats} from '../bdTypes/DBStats';

export class Game {

    static players: {[name: string]: IPlayer} = {};
    static combatsQueue: ICombat[] = [];
    static combatsInvites: {[name: string]: ICombat} = {};
    static combatsCount = 0;
    static combatsEnded = 0;

    static winDuelRates: WinDuelRatesStats;
    static winlooseDuelCache: {[name: string]: {win: number, loose: number, rate: number}} = {};
    static topWinRate: {id: string, rate: number}[] = [];

    static init() {
        return getWinDuelRates()
            .then(winDuelRates => {
                this.winDuelRates = winDuelRates;
                this.recalculateRates();
            });
    }

    static startDuel(player: IPlayer, combatId: string | null) {
        let combat: ICombat;

        if (combatId === null) {
            const newCombatId = randomBytes(8).toString('hex');

            combat = new Combat();

            this.combatsInvites[newCombatId] = combat;
            this.combatsCount++;

            player.send('note', 'Duel created, give this link to your opponent:');
            player.send('note', `https://localhost?start=${newCombatId}`);
        } else {
            combat = this.combatsInvites[combatId];

            delete this.combatsInvites[combatId];
        }

        if (!combat) {
            player.send('note', 'Your duel has ended or were canceled');

            return;
        }

        this.start(player, combat);
        this.showCharacters(player);
    }

    static startCombat(player: IPlayer) {
        const combat = this.getCombatFromQueue();

        if (combat.isFull()) {
            this.combatsQueue.splice(this.combatsQueue.indexOf(combat));
        }

        this.start(player, combat);
        this.showCharacters(player);
    }

    static showCharacters(player: IPlayer) {
        const characterSelectTimer = 120;

        player.send('select_character', this.getCharacters());

        if (player.isPlayer) {
            player.send('show_timer', characterSelectTimer);
            player.timer = setTimeout(() => {
                if (player.currentCombat) {
                    this.playerSelectCharacter(player, getRandomCharacter());
                }
            }, characterSelectTimer * 1000);
        }
    }

    static isAllowedCharacter(character: string) {
        return !!allowedCharacters[character];
    }

    static playerSelectCharacter(player: IPlayer, character: string) {
        player.clearTimer();
        this.selectCharacter(player, character);
        player.played++;
    }

    static selectCharacter(unit: IUnit, character: string) {

        if (!this.isAllowedCharacter(character)) {
            return;
        }

        unit.setCharacter(character);

        const combat = unit.currentCombat;

        unit.broadcastUpdate();

        if (combat.isReadyToStart()) {
            combat.start();
        } else {
            unit.send('note','Waiting for opponent to join');

        }
    }

    static endCombat(combat: ICombat) {
        this.combatsQueue.splice(this.combatsQueue.findIndex(c => c === combat));
        this.combatsEnded++;
        Object.keys(combat.units).forEach(id => {
            combat.units[id].send('set_in_battle', false);
            combat.units[id].currentCombat = undefined;
            combat.units[id].character = null;
            combat.units[id].clearTimer();
        });
    }

    static addBot() {
        const bot = new Bot();

        this.startCombat(bot);
        this.selectCharacter(bot, bot.selectCharacter());
    }

    static update(combat: ICombat): boolean {
        if (combat.allReady()) {
            combat.perform();
            combat.showResult();
            combat.sendHealth();

            if (combat.isEnded) {
                const units = combat.unitsArr;

                if (units[0].character.isDead !== units[1].character.isDead) {
                    if (units[0].character.isDead) {
                        this.updateWinRate(units[1].character, units[0].character);
                    } else {
                        this.updateWinRate(units[0].character, units[1].character);
                    }
                }

                this.endCombat(combat);
            } else {
                setTimeout(() => {
                    this.update(combat);
                }, 0);
            }

            return true;
        }

        return false;
    }

    static updateWinRate(winner: ICharacter, looser: ICharacter) {
        if (!this.winDuelRates[winner.id]) {
            this.winDuelRates[winner.id] = {};
        }

        if (!this.winDuelRates[winner.id][looser.id]) {
            this.winDuelRates[winner.id][looser.id] = 1;
        } else {
            this.winDuelRates[winner.id][looser.id]++;
        }

        saveWinDuelRates(this.winDuelRates);
        this.recalculateRates();
    }

    static recalculateRates() {
        Object.keys(this.winDuelRates).forEach(winnerId => {
            Object.keys(this.winDuelRates[winnerId]).forEach(looserId => {
                if (!this.winlooseDuelCache[winnerId]) {
                    this.winlooseDuelCache[winnerId] = {
                        win: 0,
                        loose: 0,
                        rate: 0
                    };
                }

                this.winlooseDuelCache[winnerId].win += this.winDuelRates[winnerId][looserId];

                if (!this.winlooseDuelCache[looserId]) {
                    this.winlooseDuelCache[looserId] = {
                        win: 0,
                        loose: 0,
                        rate: 0
                    };
                }

                this.winlooseDuelCache[looserId].loose += this.winDuelRates[winnerId][looserId];
            });
        });

        this.topWinRate.length = 0;

        Object.keys(this.winlooseDuelCache).forEach(rateId => {
            this.winlooseDuelCache[rateId].rate =
                this.winlooseDuelCache[rateId].loose
                    ? this.winlooseDuelCache[rateId].win / this.winlooseDuelCache[rateId].loose
                    : 0;

            this.topWinRate.push({
                id: rateId,
                rate: this.winlooseDuelCache[rateId].rate
            });
            this.topWinRate.sort((a, b) => b.rate - a.rate);
        });
    }

    static setAction(player: IPlayer, action: string) {
        if (player.character.action) {
            player.send('error', 'Skill already selected');

            return;
        }

        if (player.character.actions[action]
            && player.character.actions[action].isAvailable()) {
            player.send('note', `You will use ${player.character.actions[action].name} skill`);
        } else {
            player.send('error',
                `Skill ${action} is not available now`);

            return;
        }

        player.setAction(action);

        if (!this.update(player.currentCombat)) {
            player.send('note', 'Waiting for opponent...');
        }
    }

    private static getCharacters() {
        return Object.keys(allowedCharacters).map((id) => {
                        return {name: allowedCharacters[id].name, id,
                            skills: this.getActionsWithDescriptions(id)
                        };
                    });
    }

    private static getActionsWithDescriptions(id: string) {
        const actions = new (allowedCharacters[id].create)(null, id).actions;

        return Object.keys(actions).map(keys => {
            return {
                name: actions[keys].name
            };
        });
    }

    private static start(player: IPlayer, combat: ICombat) {
        player.send('set_in_battle', true);

        player.clearCombat();
        combat.addPlayer(player);
    }

    private static getCombatFromQueue(): ICombat {
        if (this.combatsQueue.length > 0) {
            return this.combatsQueue[0];
        } else {
            const combat = new Combat();

            this.combatsQueue.push(combat);
            this.combatsCount++;

            return combat;
        }
    }
}