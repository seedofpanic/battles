import {DeBuffAction} from '../deBuffAction';
import {IUnit} from '../../../models/unit';
import {WeaknessEffect} from '../../effects/necromancer/weaknessEffect';
import {ICharacter} from '../../../models/character';

export class WeaknessAction extends DeBuffAction {
    constructor(actor: ICharacter) {
        super(actor, WeaknessEffect, 'Weakness', 5);
    }
}