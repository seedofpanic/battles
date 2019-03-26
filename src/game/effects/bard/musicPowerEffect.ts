import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {Effect} from '../../effect';
import {IAction} from '../../../models/action';
import {IEffect} from '../../../models/effect';
import {EffectType} from '../../models/effectType';
import {ICharacter} from '../../../models/character';

export class MusicPowerEffect extends Effect {
    constructor(actor: ICharacter) {
        super('music_power', 'Music power', 3, actor);
    }

    damageMod(value: number,
              type: DamageTypes, self: ICharacter, target: ICharacter, source: IAction | IEffect): number {
        if (source.type[EffectType.SONG]) {
            return value;
        }
    }
}