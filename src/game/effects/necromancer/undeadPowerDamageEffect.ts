import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';

export class UndeadPowerDamageEffect extends DamageModEffect {
    constructor(actor: IUnit) {
        super('undead_power_damage', 'Undead power Damage', 2, {
            [DamageTypes.DEATH]: 1.3
        }, actor);
    }
}