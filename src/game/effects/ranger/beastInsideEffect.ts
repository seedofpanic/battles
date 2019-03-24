import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class BeastInsideEffect extends DamageModEffect {
    removeMultiply = 100 / 13;

    constructor(actor: ICharacter) {
        super('beast_inside', 'Beast inside', 3, 1.3, actor);
    }

    onAdd(unit: ICharacter) {
        unit.healthMax *= 1.3;
        unit.health *= 1.3;
    }

    onRemove(unit: ICharacter) {
        unit.healthMax *= this.removeMultiply;
        unit.health *= this.removeMultiply;
    }
}