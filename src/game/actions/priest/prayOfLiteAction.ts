import {BuffAction} from '../buffAction';
import {PrayOfLiteEffect} from '../../effects/priest/prayOfLiteEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class PrayOfLiteAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, PrayOfLiteEffect, 'Pray of lite', 5);
    }
}