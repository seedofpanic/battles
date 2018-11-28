import {BuffAction} from '../buffAction';
import {PrayOfLiteEffect} from '../../effects/priest/prayOfLiteEffect';
import {IUnit} from '../../../models/unit';

export class PrayOfLiteAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, PrayOfLiteEffect, 'Pray of lite', 5);
    }
}