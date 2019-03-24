import {ResistsModEffect} from '../resistsModEffect';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class GrandRumEffect extends ResistsModEffect {
    constructor(actor: ICharacter) {
        super('grand_rum', {
            [DamageTypes.FIRE]: 0.35,
            [DamageTypes.DEATH]: 0.35,
            [DamageTypes.HOLY]: 0.35,
        }, 'Grand rum', 3, actor);
    }
}