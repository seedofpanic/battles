import {BuffAction} from '../buffAction';
import {NatureProtectionEffect} from '../../effects/druid/natureProtectionEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class NatureProtectionAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, NatureProtectionEffect, 'Nature protection', 6);
    }
}