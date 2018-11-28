import {ResistsModEffect} from '../resistsModEffect';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {IEffect} from '../../../models/effect';
import {IAction} from '../../../models/action';

export class NatureProtectionEffect extends ResistsModEffect {
    constructor(actor: IUnit) {
        super('nature_protection', 0.7, 'Nature protection', 3, actor);
    }

    resistMod(value: number, type: DamageTypes, self: IUnit, source: IAction | IEffect): number {
        if (source.actor.isValuable) {
            return value;
        }

        return super.resistMod(value, type, self, source);
    }
}