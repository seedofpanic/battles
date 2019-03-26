import {ResistsModEffect} from '../resistsModEffect';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {IEffect} from '../../../models/effect';
import {IAction} from '../../../models/action';
import {ICharacter} from '../../../models/character';

export class NatureProtectionEffect extends ResistsModEffect {
    constructor(actor: ICharacter) {
        super('nature_protection', 0.35, 'Nature protection', 3, actor);
    }

    resistMod(value: number, type: DamageTypes, self: ICharacter, source: IAction | IEffect): number {
        if (source.actor.isValuable) {
            return value;
        }

        return super.resistMod(value, type, self, source);
    }
}