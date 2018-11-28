import {DeBuffAction} from '../deBuffAction';
import {ChainShackleEffect} from '../../effects/ninja/chainShackleEffect';
import {IUnit} from '../../../models/unit';

export class ChainShackleAction extends DeBuffAction {
    constructor(actor: IUnit) {
        super(actor, ChainShackleEffect, 'Chain shackle', 6);
    }

}