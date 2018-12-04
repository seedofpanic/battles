import {Effect} from '../effect';
import {EffectType} from '../models/effectType';
import {IUnit} from '../../models/unit';

const NAME = 'Stun';

export const STUN_EFFECT_ID = 'stun';

export class StunEffect extends Effect {
    type = {
        ...super.type,
        [EffectType.STUN]: true
    };

    constructor(roundsCount: number, actor: IUnit) {
        super(STUN_EFFECT_ID, NAME, roundsCount, actor);
    }

    isStunned(value: boolean) {
        return true;
    }
}