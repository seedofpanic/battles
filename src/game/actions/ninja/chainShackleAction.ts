import {DeBuffAction} from '../deBuffAction';
import {Unit} from '../../unit';
import {ChainShackleEffect} from '../../effects/ninja/chainShackleEffect';

export class ChainShackleAction extends DeBuffAction {
    constructor(actor: Unit) {
        super(actor, ChainShackleEffect, 'Chain shackle', 6);
    }

}