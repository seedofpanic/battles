import {ResistsModEffect} from './resistsModEffect';
import {DamageTypes} from '../models/damageTypes';
import {IUnit} from '../../models/unit';
import {ICharacter} from '../../models/character';

export const WINGS_OF_STEEL_EFFECT = 'wings_of_steel';

export class WingsOfSteelEffect extends ResistsModEffect {
    constructor(actor: ICharacter) {
        super(WINGS_OF_STEEL_EFFECT, {
            [DamageTypes.CUTTING]: 0.6,
            [DamageTypes.BLUNT]: 0.6,
        }, 'Wings of steel', 3, actor);
    }
}