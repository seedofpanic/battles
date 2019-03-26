import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ResistsModEffect} from '../resistsModEffect';
import {ICharacter} from '../../../models/character';

export class UndeadPowerArmorEffect extends ResistsModEffect {
    constructor(actor: ICharacter) {
        super('undead_power_damage', {
            [DamageTypes.HOLY]: 0.5
        }, 'Undead power Damage', 2, actor);
    }
}