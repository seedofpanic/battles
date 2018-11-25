import {BuffAction} from '../buffAction';
import {Unit} from '../../unit';
import {HardenedSkinEffect} from '../../effects/demon/hardenedSkinEffect';

export class HardenedSkinAction extends BuffAction {
    constructor(actor: Unit) {
        super(actor, HardenedSkinEffect, 'Hardened skin');
    }
}