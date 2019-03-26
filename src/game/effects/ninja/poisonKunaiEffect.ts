import {DotEffect} from '../dotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class PoisonKunaiEffect extends DotEffect {
    type = {
        ...super.type,
        [EffectType.POISON]: true
    };

    constructor(actor: ICharacter) {
        super('poison_kunai', 'Poison kunai', 2, 3, DamageTypes.POISON, 3, actor);
    }
}