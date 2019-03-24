import {Action} from '../action';
import {IUnit} from '../../models/unit';
import {IEffect} from '../../models/effect';
import {ICombat} from '../../models/combat';
import {ICharacter} from '../../models/character';

export class BuffAction extends Action {
    constructor(actor: ICharacter,
                private buffEffect: new (actor: ICharacter) => IEffect,
                name: string,
                cooldown = 0,
                maxCharges = 1) {
        super(actor, name, cooldown, maxCharges);
    }

    beforeResolve(combat: ICombat, self: ICharacter, target: ICharacter) {
        self.addEffect(this, new this.buffEffect(self));
    }
}