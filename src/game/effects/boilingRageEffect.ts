import {DamageModEffect} from './damageModEffect';
import {IUnit} from '../../models/unit';
import {ICharacter} from '../../models/character';

export const BOILING_RAGE_EFFECT_ID = 'boiling_rage';

export class BoilingRageEffect extends DamageModEffect {
    constructor(actor: ICharacter) {
        super(BOILING_RAGE_EFFECT_ID, 'Boiling rage', 2, 1.2, actor);
    }
}