import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {BattleStatnceEffect} from '../../effects/amazon/battleStatnceEffect';

export class BattleStatnceAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, BattleStatnceEffect, 'Battle statnce', 6);
    }
}