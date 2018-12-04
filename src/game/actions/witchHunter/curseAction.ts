import {DeBuffAction} from '../deBuffAction';
import {IUnit} from '../../../models/unit';
import {CurseEffect} from '../../effects/witchHunter/curseEffect';

export class CurseAction extends DeBuffAction {
    constructor(actor: IUnit) {
        super(actor, CurseEffect, 'Curse', 5);
    }
}