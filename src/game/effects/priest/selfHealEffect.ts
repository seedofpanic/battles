import {HotEffect} from '../hotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class SelfHealEffect extends HotEffect {
    constructor(actor: ICharacter) {
        super('self_heal', 'Self heal', 8, 8, DamageTypes.HOLY, 3, actor);
    }
}