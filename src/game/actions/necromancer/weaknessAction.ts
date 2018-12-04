import {DeBuffAction} from '../deBuffAction';
import {IUnit} from '../../../models/unit';
import {WeaknessEffect} from '../../effects/necromancer/weaknessEffect';

export class WeaknessAction extends DeBuffAction {
    constructor(actor: IUnit) {
        super(actor, WeaknessEffect, 'Curse', 5);
    }
}