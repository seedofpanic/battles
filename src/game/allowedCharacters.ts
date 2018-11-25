import {Character} from './character';
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
import {Unit} from './unit';

export const allowedCharacters: {
    [name: string]: { name: string, create: { new(actor: Unit, id: string): Character } }
} = {
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