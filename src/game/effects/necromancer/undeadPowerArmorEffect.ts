import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ResistsModEffect} from '../resistsModEffect';

export class UndeadPowerArmorEffect extends ResistsModEffect {
    constructor(actor: IUnit) {
        super('undead_power_damage', {
            [DamageTypes.HOLY]: 1.3
        }, 'Undead power Damage', 2, actor);
    }
}