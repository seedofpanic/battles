import {randomBytes} from 'crypto';
import {allowedCharacters} from './allowedCharacters';
import {ICombat} from '../models/combat';
import {IPlayer} from '../models/player';
import {Combat} from './combat';
import {IUnit} from '../models/unit';
import {Bot} from './units/bot';
import {ICharacter} from '../models/character';
import {getWinDuelRates, saveWinDuelRates, WinDuelRatesStats} from '../bdTypes/DBStats';
import {Player} from './units/player';

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

        if (this.combatsInvites[combatId]) {
            this.combatsCount++;
            combat = this.combatsInvites[combatId];

            delete this.combatsInvites[combatId];
        } else {
            const newCombatId = randomBytes(8).toString('hex');

            combat = new Combat();

            this.combatsInvites[newCombatId] = combat;

            const link = `http://${process.env.FRONT_HOST || process.env.HOST}?start=${newCombatId}`;


            player.send('note', 'Duel created, give this link to your opponent');
            player.send('note', link);
            player.send('duel_link', link);
        }

        if (!combat) {
            player.send('note', 'Your duel has ended or were canceled');

            return;
        }

        this.start(player, combat);

        if (combat.isFull()) {
            combat.start();
        }
    }

    static startCombat(player: IPlayer) {
        const combat = this.getCombatFromQueue();

        this.start(player, combat);

        if (combat.isFull()) {
            this.removeCombatFromQueue(combat);
            this.combatsCount++;
        }
    }

    static removeCombatFromQueue(combat: ICombat) {
        this.combatsQueue.splice(this.combatsQueue.indexOf(combat));
    }

    static showCharacters(player: IPlayer) {
        player.send('select_character', this.getCharacters());
    }

    static isAllowedCharacter(character: string) {
        return !!allowedCharacters[character];
    }

    static playerSelectCharacter(player: Player, characterId: string): boolean {
        const selected = this.selectCharacter(player, characterId);

        if (selected) {
            player.played++;
        }

        return selected;
    }

    static selectCharacter(unit: IUnit, characterId: string): boolean {

        if (!this.isAllowedCharacter(characterId)) {
            return false;
        }

        unit.setCharacter(characterId);

        unit.send('note','Waiting for opponent to join');

        return true;
    }

    static endCombat(combat: ICombat) {
        this.combatsQueue.splice(this.combatsQueue.findIndex(c => c === combat));
        Object.keys(combat.characters).forEach(id => {
            combat.removeCharacter(combat.characters[id]);
        });
    }

    static addBot() {
        const bot = new Bot();

        this.startCombat(bot);
    }

    static update(combat: ICombat): boolean {
        if (combat.allReady()) {
            combat.perform();
            combat.showResult();
            combat.sendHealth();

            if (combat.isEnded) {
                this.combatsEnded++;
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

        if (!this.update(player.character.combat)) {
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
        const actions = new (allowedCharacters[id].create)(id).actions;

        return Object.keys(actions).map(keys => {
            return {
                name: actions[keys].name
            };
        });
    }

    private static start(player: IPlayer, combat: ICombat) {
        player.send('set_in_battle', true);

        player.createNewCharacter();
        combat.addCharacter(player.character);
    }

    private static getCombatFromQueue(): ICombat {
        if (this.combatsQueue.length > 0) {
            return this.combatsQueue[0];
        } else {
            const combat = new Combat();

            this.combatsQueue.push(combat);

            return combat;
        }
    }

    static leaveCombat(player: Player) {
        player.leaveCombat();
    }
}