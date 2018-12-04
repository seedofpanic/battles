import {DeBuffAction} from '../deBuffAction';
import {IUnit} from '../../../models/unit';
import {DemoralizeEffect} from '../../effects/bard/demoralizeEffect';

export class DemoralizeAction extends DeBuffAction {
    constructor(actor: IUnit) {
        super(actor, DemoralizeEffect, 'Demoralize', 6);
    }
}