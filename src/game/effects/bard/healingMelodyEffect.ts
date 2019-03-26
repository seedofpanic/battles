import {HotEffect} from '../hotEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class HealingMelodyEffect extends HotEffect {
    constructor(actor: ICharacter) {
        super('healing_melody', 'Healing melody', 5, 5, DamageTypes.HOLY, 3, actor);
    }
}