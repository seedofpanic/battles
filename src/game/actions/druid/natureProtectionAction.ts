import {BuffAction} from '../buffAction';
import {NatureProtectionEffect} from '../../effects/druid/natureProtectionEffect';
import {IUnit} from '../../../models/unit';

export class NatureProtectionAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, NatureProtectionEffect, 'Nature protection', 6);
    }
}