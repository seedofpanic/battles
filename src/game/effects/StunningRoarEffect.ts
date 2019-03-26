import {StunEffect} from './stunEffect';
import {EffectType} from '../models/effectType';
import {IUnit} from '../../models/unit';
import {ICharacter} from '../../models/character';

export class StunningRoarEffect extends StunEffect {
    type = {
        ...super.type,
        [EffectType.STUN]: true,
    };

    constructor(actor: ICharacter) {
        super(1, actor);
    }
}