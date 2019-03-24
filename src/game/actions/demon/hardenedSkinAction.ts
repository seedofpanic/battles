import {BuffAction} from '../buffAction';
import {HardenedSkinEffect} from '../../effects/demon/hardenedSkinEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class HardenedSkinAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, HardenedSkinEffect, 'Hardened skin');
    }
}