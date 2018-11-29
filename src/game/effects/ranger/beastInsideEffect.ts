import {DamageModEffect} from '../damageModEffect';
import {IUnit} from '../../../models/unit';

export class BeastInsideEffect extends DamageModEffect {
    removeMultiply = 100 / 13;

    constructor(actor: IUnit) {
        super('beast_inside', 'Beast inside', 3, 1.3, actor);
    }

    onAdd(unit: IUnit) {
        unit.character.healthMax *= 1.3;
        unit.character.health *= 1.3;
    }

    onRemove(unit: IUnit) {
        unit.character.healthMax *= this.removeMultiply;
        unit.character.health *= this.removeMultiply;
    }
}