import {DeBuffAction} from '../deBuffAction';
import {IUnit} from '../../../models/unit';
import {CurseEffect} from '../../effects/witchHunter/curseEffect';
import {ICharacter} from '../../../models/character';

export class CurseAction extends DeBuffAction {
    constructor(actor: ICharacter) {
        super(actor, CurseEffect, 'Curse', 5);
    }
}