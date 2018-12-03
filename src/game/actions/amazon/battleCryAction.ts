import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {BattleCryEffect} from '../../effects/amazon/battleCryEffect';

export class BattleCryAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, BattleCryEffect, 'Battle cry', 6);
    }
}