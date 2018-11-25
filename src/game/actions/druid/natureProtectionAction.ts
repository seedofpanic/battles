import {BuffAction} from '../buffAction';
import {Unit} from '../../unit';
import {NatureProtectionEffect} from '../../effects/druid/natureProtectionEffect';

export class NatureProtectionAction extends BuffAction {
    constructor(actor: Unit) {
        super(actor, NatureProtectionEffect, 'Nature protection', 6);
    }
}