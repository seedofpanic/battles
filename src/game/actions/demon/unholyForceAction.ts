import {Unit} from '../../unit';
import {BuffAction} from '../buffAction';
import {UnholyForceEffect} from '../../effects/demon/unholyForceEffect';

export class UnholyForceAction extends BuffAction {
    constructor(actor: Unit) {
        super(actor, UnholyForceEffect, 'Unholy force', 5);
    }
}