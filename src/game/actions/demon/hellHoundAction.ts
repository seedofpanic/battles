import {Unit} from '../../unit';
import {SummonAction} from '../summonAction';
import {HellHound} from '../../characters/summons/demon/hellHound';

export class HellHoundAction extends SummonAction {
    constructor(actor: Unit) {
        super(actor, 'Hell hound','hell_hound', HellHound);
    }
}