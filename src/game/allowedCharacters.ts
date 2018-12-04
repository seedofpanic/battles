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
import {Thief} from './characters/thief';
import {Dwarf} from './characters/dwarf';
import {Pirate} from './characters/pirate';
import {Demon} from './characters/demon';
import {Paladin} from './characters/paladin';
import {IUnit} from '../models/unit';
import {ICharacter} from '../models/character';
import {Ninja} from './characters/ninja';
import {Necromancer} from './characters/necromancer';
import {Amazon} from './characters/amazon';

export const allowedCharacters: {
    [name: string]: { name: string, create: { new(actor: IUnit, id: string): ICharacter } }
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
    'thief': {
        name: 'Thief',
        create: Thief
    },
    'dwarf': {
        name: 'Dwarf',
        create: Dwarf
    },
    'pirate': {
        name: 'Pirate',
        create: Pirate
    },
    'demon': {
        name: 'Demon',
        create: Demon
    },
    'paladin': {
        name: 'Paladin',
        create: Paladin
    },
    'ninja': {
        name: 'Ninja',
        create: Ninja
    },
    'necromancer': {
        name: 'Necromancer',
        create: Necromancer
    },
    'amazon': {
        name: 'Amazon',
        create: Amazon
    }
};