import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {IAction} from '../../models/action';
import {IUnit} from '../../models/unit';
import {HandmadeBombAction} from '../actions/thief/handmadeBombAction';
import {ImprovedCritAction} from '../actions/thief/ImprovedCritAction';
import {SimpleTrickAction} from '../actions/thief/simpleTrickAction';
import {BrotherhoodCovenantAction} from '../actions/thief/brotherhoodCovenantAction';
import {ThrowingKnivesAction} from '../actions/thief/throwingKnivesAction';
import {ThiefAmuletAction} from '../actions/thief/thiefAmuletAction';
import {PoisonedKnifeAction} from '../actions/thief/poisonedKnifeAction';
import {BrassKnockAction} from '../actions/thief/brassKnockAction';

export class Thief extends Character {
    actions: { [name: string]: IAction };
    health = 100;
    healthMax = 100;
    name = 'Thief';
    resists = {
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1,
    };

    constructor(id: string) {
        super(id);

        this.actions = {
            'poisoned_knife': new PoisonedKnifeAction(this),
            'brass_knock': new BrassKnockAction(this),
            'handmade_bomb': new HandmadeBombAction(this),
            'improved_crit': new ImprovedCritAction(this),
            'simple_trick': new SimpleTrickAction(this),
            'brotherhood_covenant': new BrotherhoodCovenantAction(this),
            'throwing_knives': new ThrowingKnivesAction(this),
            'thief_amulet': new ThiefAmuletAction(this),
        };
    }
}