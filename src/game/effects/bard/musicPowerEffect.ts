import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {Effect} from '../../effect';
import {IAction} from '../../../models/action';
import {IEffect} from '../../../models/effect';
import {EffectType} from '../../models/effectType';

export class MusicPowerEffect extends Effect {
    constructor(actor: IUnit) {
        super('music_power', 'Music power', 3, actor);
    }

    damageMod(value: number, type: DamageTypes, self: IUnit, target: IUnit, source: IAction | IEffect): number {
        if (source.type[EffectType.SONG]) {
            return value;
        }
    }
}