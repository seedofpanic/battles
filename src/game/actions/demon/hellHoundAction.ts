import {SummonAction} from '../summonAction';
import {HellHound} from '../../characters/summons/demon/hellHound';
import {IUnit} from '../../../models/unit';

export class HellHoundAction extends SummonAction {
    constructor(actor: IUnit) {
        super(actor, 'Hell hound','hell_hound', HellHound);
    }
}