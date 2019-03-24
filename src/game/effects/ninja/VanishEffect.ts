import {Effect} from '../../effect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {IAction} from '../../../models/action';
import {IEffect} from '../../../models/effect';
import {EffectType} from '../../models/effectType';
import {ICharacter} from '../../../models/character';

export class VanishEffect extends Effect {
    constructor(actor: ICharacter) {
        super('vanish', 'Vanish', 1, actor);
    }

    resistMod(value: number, type: DamageTypes, self: ICharacter, source: IAction | IEffect): number {
        return 0;
    }

    effectResistMod(value: number, effect: IEffect) {
        return 0;
    }
}