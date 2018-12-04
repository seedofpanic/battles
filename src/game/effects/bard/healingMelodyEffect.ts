import {HotEffect} from '../hotEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class HealingMelodyEffect extends HotEffect {
    constructor(actor: IUnit) {
        super('healing_melody', 'Healing melody', 5, 5, DamageTypes.HOLY, 3, actor);
    }
}