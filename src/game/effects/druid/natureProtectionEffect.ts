import {ResistsModEffect} from '../resistsModEffect';
import {Unit} from '../../unit';
import {DamageTypes} from '../../models/damageTypes';
import {Action} from '../../action';
import {Effect} from '../../effect';

export class NatureProtectionEffect extends ResistsModEffect {
    constructor(actor: Unit) {
        super('nature_protection', 0.7, 'Nature protection', 3, actor);
    }

    resistMod(value: number, type: DamageTypes, self: Unit, source: Action | Effect): number {
        if (source.actor.isValuable) {
            return value;
        }

        return super.resistMod(value, type, self, source);
    }
}