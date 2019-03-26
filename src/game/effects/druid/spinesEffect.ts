import {DotEffect} from '../dotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class SpinesEffect extends DotEffect {
    type = {
        ...super.type,
        [EffectType.POISON]: true
    };

    constructor(actor: ICharacter) {
        super('spines', 'Spines', 2, 2, DamageTypes.POISON, 3, actor);
    }
}