import {BuffAction} from '../buffAction';
import {HardenedSkinEffect} from '../../effects/demon/hardenedSkinEffect';
import {IUnit} from '../../../models/unit';

export class HardenedSkinAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, HardenedSkinEffect, 'Hardened skin');
    }
}