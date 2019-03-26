import {Action} from '../action';
import {IUnit} from '../../models/unit';
import {IEffect} from '../../models/effect';
import {ICombat} from '../../models/combat';
import {ICharacter} from '../../models/character';

export class DeBuffAction extends Action {
    constructor(actor: ICharacter,
                private deBuffEffect: new (actor: ICharacter) => IEffect,
                name: string,
                cooldown = 0,
                maxCharges = 1) {
        super(actor, name, cooldown, maxCharges);
    }

    beforeResolve(combat?: ICombat, self?: ICharacter, target?: ICharacter) {
        target.addEffect(this, new this.deBuffEffect(self));
    }
}