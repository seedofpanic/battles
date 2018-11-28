import {Action} from '../action';
import {IUnit} from '../../models/unit';
import {IEffect} from '../../models/effect';
import {ICombat} from '../../models/combat';

export class DeBuffAction extends Action {
    constructor(actor: IUnit,
                private deBuffEffect: new (actor: IUnit) => IEffect,
                name: string,
                cooldown = 0,
                maxCharges = 1) {
        super(actor, name, cooldown, maxCharges);
    }

    beforeResolve(combat?: ICombat, self?: IUnit, target?: IUnit) {
        target.addEffect(this, new this.deBuffEffect(self));
    }
}