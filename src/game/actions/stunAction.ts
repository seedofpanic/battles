import {Action} from '../action';
import {EffectType} from '../models/effectType';
import {ICombat} from '../../models/combat';
import {IUnit} from '../../models/unit';

const NAME = 'Stun';

export class StunAction extends Action {
    type = EffectType.STUN;

    constructor(actor: IUnit) {
        super(actor, NAME);
    }

    perform(combat: ICombat, self?: IUnit, target?: IUnit) {
    }
}