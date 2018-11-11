import {Player} from './units/player';
import {Combat} from './combat';
import {randomBytes} from 'crypto';
import {allowedCharacters} from './allowedCharacters';
import {Unit} from './unit';
import {Bot} from './units/bot';

export class Game {

    players: {[name: string]: Player} = {};
    combatsQueue: Combat[] = [];
    combatsInvites: {[name: string]: Combat} = {};
    combatsCount = 0;
    combatsEnded = 0;

    startDuel(player: Player, combatId: string | null) {
        let combat: Combat;

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

    startCombat(player: Player) {
        const combat = this.getCombatFromQueue();

        if (combat.isFull()) {
            this.combatsQueue.splice(this.combatsQueue.indexOf(combat));
        }

        this.start(player, combat);
        this.showCharacters(player);
    }

    showCharacters(player: Unit) {
        player.send('select_character', this.getCharacters());
    }

    isAllowedCharacter(character: string) {
        return !!allowedCharacters[character];
    }

    getPlayer(chatId: string) {
        return this.players[chatId];
    }

    addPlayer(id: string): Player {
        this.players[id] = new Player(id);

        return this.players[id];
    }

    selectCharacter(unit: Unit, character: string) {

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

    endCombat(combat: Combat) {
        this.combatsQueue.splice(this.combatsQueue.findIndex(c => c === combat));
        this.combatsEnded++;
        Object.keys(combat.units).forEach(id => {
            combat.units[id].send('set_in_battle', false);
            combat.units[id].currentCombat = undefined;
        });
    }

    addBot() {
        const bot = new Bot();

        this.startCombat(bot);
        this.selectCharacter(bot, bot.selectCharacter());
    }

    update(combat: Combat): boolean {
        if (combat.allReady()) {
            combat.perform();
            combat.showResult();

            if (combat.isEnded) {
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

    private getCharacters() {
        return Object.keys(allowedCharacters).map((id) => {
                        return {name: allowedCharacters[id].name, id,
                            skills: this.getActionsWithDescriptions(id)
                        };
                    });
    }

    private getActionsWithDescriptions(id: string) {
        const actions = new (allowedCharacters[id].create)(null, id).actions;

        return Object.keys(actions).map(keys => {
            return {
                name: actions[keys].name
            };
        });
    }

    private start(player: Player, combat: Combat) {
        player.send('set_in_battle', true);

        player.clearCombat();
        combat.addPlayer(player);
    }

    private getCombatFromQueue(): Combat {
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