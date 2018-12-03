import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {SecondWindEffect} from '../../effects/amazon/secondWindEffect';

export class SecondWindAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, SecondWindEffect, 'Second wind', 6);
    }
}