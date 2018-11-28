import {BuffAction} from '../buffAction';
import {BlessOfNatureEffect} from '../../effects/druid/blessOfNatureEffect';
import {IUnit} from '../../../models/unit';

export class BlessOfNatureAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, BlessOfNatureEffect, 'Bless of nature', 6);
    }
}