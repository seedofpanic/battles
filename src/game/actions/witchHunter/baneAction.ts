import {DeBuffAction} from '../deBuffAction';
import {IUnit} from '../../../models/unit';
import {BaneEffect} from '../../effects/witchHunter/baneEffect';
import {ICharacter} from '../../../models/character';

export class BaneAction extends DeBuffAction {
    constructor(actor: ICharacter) {
        super(actor, BaneEffect, 'Bane', 6);
    }

}