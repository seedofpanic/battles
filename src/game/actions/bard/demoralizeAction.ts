import {DeBuffAction} from '../deBuffAction';
import {IUnit} from '../../../models/unit';
import {DemoralizeEffect} from '../../effects/bard/demoralizeEffect';
import {ICharacter} from '../../../models/character';

export class DemoralizeAction extends DeBuffAction {
    constructor(actor: ICharacter) {
        super(actor, DemoralizeEffect, 'Demoralize', 6);
    }
}