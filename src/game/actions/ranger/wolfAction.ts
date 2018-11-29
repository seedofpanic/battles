import {SummonAction} from '../summonAction';
import {IUnit} from '../../../models/unit';
import {Wolf} from '../../characters/summons/ranger/wolf';

export class WolfAction extends SummonAction {
    constructor(actor: IUnit) {
        super(actor, 'Wolf', 'wolf', Wolf);
    }
}