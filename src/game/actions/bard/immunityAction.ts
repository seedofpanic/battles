import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {ImmunityEffect} from '../../effects/bard/immunityEffect';

export class ImmunityAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, ImmunityEffect, 'Immunity', 6);
    }
}
