import {BuffAction} from '../buffAction';
import {Unit} from '../../unit';
import {BlessOfNatureEffect} from '../../effects/druid/blessOfNatureEffect';

export class BlessOfNatureAction extends BuffAction {
    constructor(actor: Unit) {
        super(actor, BlessOfNatureEffect, 'Bless of nature', 6);
    }
}