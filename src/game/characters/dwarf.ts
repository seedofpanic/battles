import {Character} from '../character';
import {SwordCuttingAction} from '../actions/barbarian/swordCuttingAction';
import {DamageTypes} from '../models/damageTypes';
import {ShieldAction} from '../actions/warrior/shieldAction';
import {SwordAction} from '../actions/swordAction';
import {IUnit} from '../../models/unit';
import {IAction} from '../../models/action';

export class Dwarf extends Character {
    actions: { [name: string]: IAction };
    health = 100;
    healthMax = 100;
    name = 'Dwarf';
    resists = {
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1,
    };

    constructor(actor: IUnit, id: string) {
        super(id);

        this.actions = {
            'bleeding_wound': new SwordCuttingAction(actor),
            'slash': new SwordAction(actor),
            'shield_strike': new ShieldAction(actor),
        };
    }
}