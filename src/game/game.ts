import {Player} from './player';
import {Combat} from './combat';
import {randomBytes} from 'crypto';
import {Barbarian} from './characters/barbarian';
import {Warrior} from './characters/warrior';
import {Mage} from './characters/mage';
import {Vampire} from './characters/vampire';
import {Druid} from './characters/druid';
import {Monk} from './characters/monk';
import {Priest} from './characters/priest';
import {Ranger} from './characters/ranger';
import {Draconite} from './characters/draconite';
import {Bard} from './characters/bard';
import {Rogue} from './characters/rogue';
import {Dwarf} from './characters/dwarf';
import {Pirate} from './characters/pirate';
import {Devil} from './characters/devil';
import {Character} from './character';

export const allowedCharacters: {[name: string]: {name: string, create: {new (id: string): Character}}} = {
    'barbarian': {
        name: 'Barbarian',
        create: Barbarian
    },
    'warrior': {
        name: 'Warrior',
        create: Warrior
    },
    'mage': {
        name: 'Mage',
        create: Mage
    },
    'vampire': {
        name: 'Vampire',
        create: Vampire
    },
    'druid': {
        name: 'Druid',
        create: Druid
    },
    'monk': {
        name: 'Monk',
        create: Monk
    },
    'priest': {
        name: 'Priest',
        create: Priest
    },
    'ranger': {
        name: 'Ranger',
        create: Ranger
    },
    'draconite': {
        name: 'Draconite',
        create: Draconite
    },
    'bard': {
        name: 'Bard',
        create: Bard
    },
    'rogue': {
        name: 'Rogue',
        create: Rogue
    },
    'dwarf': {
        name: 'Dwarf',
        create: Dwarf
    },
    'pirate': {
        name: 'Pirate',
        create: Pirate
    },
    'devil': {
        name: 'Devil',
        create: Devil
    }
};

export class Game {

    players: {[name: string]: Player} = {};
    combatsQueue: Combat[] = [];
    combatsInvites: {[name: string]: Combat} = {};
    combatsCount = 0;
    combatsEnded = 0;

    static calcDamage(minDamage: number, maxDamage: number) {
        return Math.ceil(Math.random() * (maxDamage - minDamage)) + minDamage;
    }

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

    showCharacters(player: Player) {
        player.send('select_character', this.getCharacters());
    }

    isAllowedCharacter(character: string) {
        return !!allowedCharacters[character];
    }

    getPlayer(chatId: string) {
        return this.players[chatId];
    }

    addPlayer(chatId: string): Player {
        this.players[chatId] = new Player(chatId);

        return this.players[chatId];
    }

    selectCharacter(player: Player, character: string) {

        if (!this.isAllowedCharacter(character)) {
            return;
        }

        if (!player.currentCombat) {
            this.startCombat(player);

            return;
        }

        player.setCharacter(character);

        const combat = player.currentCombat;

        Object.keys(combat.players).forEach(id => {
            combat.players[id].send('character_update', {
                id: player.chatId,
                data: {
                    id: player.character.id,
                    name: player.getName(),
                    healthMax: player.character.healthMax,
                    health: player.character.health
                }
            });
        });

        if (combat.isReadyToStart()) {
            combat.start();
        } else {
            player.send('note','Waiting for opponent to join');

        }
    }

    endCombat(combat: Combat) {
        this.combatsQueue.splice(this.combatsQueue.findIndex(c => c === combat));
        this.combatsEnded++;
        Object.keys(combat.players).forEach(id => {
            combat.players[id].send('set_in_battle', false);
            combat.players[id].currentCombat = undefined;
        });
    }

    private getCharacters() {
        return Object.keys(allowedCharacters).map((id) => {
                        return {name: allowedCharacters[id].name, id,
                            skills: this.getActionsWithDescriptions(id)
                        };
                    });
    }

    private getActionsWithDescriptions(id: string) {
        const actions = new (allowedCharacters[id].create)(id).actions;

        return Object.keys(actions).map(keys => {
            return {
                name: actions[keys].name
            };
        });
    }

    private start(player: Player, combat: Combat) {
        player.send('set_in_battle', true);

        if (player.currentCombat) {
            player.send('error', 'You are already in queue');

            return;
        }

        player.currentCombat = combat;
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