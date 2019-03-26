import {DotEffect} from '../dotEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class BaneEffect extends DotEffect {
    constructor(actor: ICharacter) {
        super('bane', 'Bane', 2, 3, DamageTypes.POISON, 3, actor);
    }

}