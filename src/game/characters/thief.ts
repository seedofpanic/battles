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

    constructor(actor: IUnit, id: string) {
        super(id);

        this.actions = {
            'poisoned_knife': new PoisonedKnifeAction(actor),
            'brass_knock': new BrassKnockAction(actor),
            'handmade_bomb': new HandmadeBombAction(actor),
            'improved_crit': new ImprovedCritAction(actor),
            'simple_trick': new SimpleTrickAction(actor),
            'brotherhood_covenant': new BrotherhoodCovenantAction(actor),
            'throwing_knives': new ThrowingKnivesAction(actor),
            'thief_amulet': new ThiefAmuletAction(actor),
        };
    }
}