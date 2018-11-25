import {BuffAction} from '../buffAction';
import {Unit} from '../../unit';
import {PrayOfLiteEffect} from '../../effects/priest/prayOfLiteEffect';

export class PrayOfLiteAction extends BuffAction {
    constructor(actor: Unit) {
        super(actor, PrayOfLiteEffect, 'Pray of lite', 5);
    }
}