import {DeBuffAction} from '../deBuffAction';
import {ChainShackleEffect} from '../../effects/ninja/chainShackleEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class ChainShackleAction extends DeBuffAction {
    constructor(actor: ICharacter) {
        super(actor, ChainShackleEffect, 'Chain shackle', 6);
    }

}