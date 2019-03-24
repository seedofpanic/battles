import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';
import {DamageTypes} from '../../models/damageTypes';
import {ICharacter} from '../../../models/character';

export class UndeadPowerDamageEffect extends DamageModEffect {
    constructor(actor: ICharacter) {
        super('undead_power_damage', 'Undead power Damage', 2, {
            [DamageTypes.DEATH]: 1.3
        }, actor);
    }
}