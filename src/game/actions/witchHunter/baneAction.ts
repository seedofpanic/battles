import {DeBuffAction} from '../deBuffAction';
import {IUnit} from '../../../models/unit';
import {BaneEffect} from '../../effects/witchHunter/baneEffect';

export class BaneAction extends DeBuffAction {
    constructor(actor: IUnit) {
        super(actor, BaneEffect, 'Bane', 6);
    }

}