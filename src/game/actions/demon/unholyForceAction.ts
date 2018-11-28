import {BuffAction} from '../buffAction';
import {UnholyForceEffect} from '../../effects/demon/unholyForceEffect';
import {IUnit} from '../../../models/unit';

export class UnholyForceAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, UnholyForceEffect, 'Unholy force', 5);
    }
}