import {Action} from '../action';
import {EffectType} from '../models/effectType';
import {ICombat} from '../../models/combat';
import {IUnit} from '../../models/unit';
import {ICharacter} from '../../models/character';

const NAME = 'Stun';

export class StunAction extends Action {
    type = {
        ...super.type,
        [EffectType.STUN]: true
    };

    constructor(actor: ICharacter) {
        super(actor, NAME);
    }

    perform(combat: ICombat, self?: ICharacter, target?: ICharacter) {
    }
}