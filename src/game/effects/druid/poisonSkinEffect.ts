import {Effect} from '../../effect';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';
import {DotEffect} from '../dotEffect';
import {Action} from '../../action';

export class PoisonSkinEffect extends Effect {
    constructor(actor: Unit) {
        super('poison_skin', 'Poison skin', 5, actor);
    }

    onDamage(damage: number, type: DamageTypes, self: Unit, source: Action | Effect) {
        source.actor.decreaseHp(this, 5 * source.actor.getResist(DamageTypes.POISON, this), DamageTypes.POISON);

        const poisonEffect = new DotEffect('poison', 'Poison', 5, 5, DamageTypes.POISON, 2, self);

        poisonEffect.type = EffectType.POISON;

        source.actor.addEffect(this, poisonEffect);
    }
}