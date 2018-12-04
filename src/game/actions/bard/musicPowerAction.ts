import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {MusicPowerEffect} from '../../effects/bard/musicPowerEffect';
import {EffectType} from '../../models/effectType';

export class MusicPowerAction extends BuffAction {
    type = {
        ...super.type,
        [EffectType.SONG]: true
    };

    constructor(actor: IUnit) {
        super(actor, MusicPowerEffect, 'Music power', 6);
    }
}