import {Effect} from '../../effect';
import {DamageTypes} from '../../models/damageTypes';
import {DotEffect} from '../dotEffect';
import {EffectType} from '../../models/effectType';
import {IUnit} from '../../../models/unit';
import {IAction} from '../../../models/action';
import {IEffect} from '../../../models/effect';
import {ICharacter} from '../../../models/character';

export class PoisonSkinEffect extends Effect {
    constructor(actor: ICharacter) {
        super('poison_skin', 'Poison skin', 5, actor);
    }

    onDamage(damage: number, type: DamageTypes, self: ICharacter, source: IAction | IEffect) {
        source.actor.decreaseHp(this, 5 * source.actor.getResist(DamageTypes.POISON, this), DamageTypes.POISON);

        const poisonEffect = new DotEffect('poison', 'Poison', 5, 5, DamageTypes.POISON, 2, self);

        poisonEffect.type[EffectType.POISON] = true;

        source.actor.addEffect(this, poisonEffect);
    }
}