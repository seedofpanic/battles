import {Action} from '../../action';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {Skeleton} from '../../characters/summons/necromancer/skeleton';
import {UndeadAuraEffect} from '../../effects/necromancer/undeadAuraEffect';

export class UndeadAuraAction extends Action {
    constructor(actor: IUnit) {
        super(actor, 'Undead aura', 5);
    }

    beforeResolve(combat: ICombat, self: IUnit, target: IUnit) {
        combat.unitsArr.forEach(unit => {
            if (unit.character instanceof Skeleton) {
                unit.addEffect(this, new UndeadAuraEffect(this.actor));
            }
        });
    }
}