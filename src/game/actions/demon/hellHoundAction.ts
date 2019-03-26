import {SummonAction} from '../summonAction';
import {HellHound} from '../../characters/summons/demon/hellHound';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class HellHoundAction extends SummonAction {
    constructor(actor: ICharacter) {
        super(actor, 'Hell hound','hell_hound', HellHound, 10);
    }
}