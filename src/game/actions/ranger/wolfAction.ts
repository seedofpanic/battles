import {SummonAction} from '../summonAction';
import {IUnit} from '../../../models/unit';
import {Wolf} from '../../characters/summons/ranger/wolf';
import {ICharacter} from '../../../models/character';

export class WolfAction extends SummonAction {
    constructor(actor: ICharacter) {
        super(actor, 'Wolf', 'wolf', Wolf);
    }
}