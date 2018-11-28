import {Action} from '../action';
import {IUnit} from '../../models/unit';
import {IEffect} from '../../models/effect';
import {ICombat} from '../../models/combat';

export class BuffAction extends Action {
    constructor(actor: IUnit,
                private buffEffect: new (actor: IUnit) => IEffect,
                name: string,
                cooldown = 0,
                maxCharges = 1) {
        super(actor, name, cooldown, maxCharges);
    }

    beforeResolve(combat: ICombat, self: IUnit, target: IUnit) {
        self.addEffect(this, new this.buffEffect(self));
    }
}