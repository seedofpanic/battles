import {Action} from '../../action';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {Skeleton} from '../../characters/summons/necromancer/skeleton';
import {UndeadAuraEffect} from '../../effects/necromancer/undeadAuraEffect';
import {ICharacter} from '../../../models/character';

export class UndeadAuraAction extends Action {
    constructor(actor: ICharacter) {
        super(actor, 'Undead aura', 5);
    }

    beforeResolve(combat: ICombat, self: ICharacter, target: ICharacter) {
        combat.charactersArr.forEach(unit => {
            if (unit instanceof Skeleton) {
                unit.addEffect(this, new UndeadAuraEffect(this.actor));
            }
        });
    }
}