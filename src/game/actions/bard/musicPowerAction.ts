import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {MusicPowerEffect} from '../../effects/bard/musicPowerEffect';
import {EffectType} from '../../models/effectType';
import {ICharacter} from '../../../models/character';

export class MusicPowerAction extends BuffAction {
    type = {
        ...super.type,
        [EffectType.SONG]: true
    };

    constructor(actor: ICharacter) {
        super(actor, MusicPowerEffect, 'Music power', 6);
    }
}