import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {BattleStatnceEffect} from '../../effects/amazon/battleStatnceEffect';
import {ICharacter} from '../../../models/character';

export class BattleStatnceAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, BattleStatnceEffect, 'Battle stance', 6);
    }
}