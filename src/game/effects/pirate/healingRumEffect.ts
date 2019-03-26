import {HotEffect} from '../hotEffect';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class HealingRumEffect extends HotEffect {
    constructor(actor: ICharacter) {
        super('healing_rum', 'Healing rum', 5, 5, DamageTypes.POISON, 3, actor);
    }
}