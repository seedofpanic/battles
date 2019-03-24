import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {BattleCryEffect} from '../../effects/amazon/battleCryEffect';
import {ICharacter} from '../../../models/character';

export class BattleCryAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, BattleCryEffect, 'Battle cry', 6);
    }
}