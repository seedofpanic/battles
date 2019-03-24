import {Action} from '../../action';
import {IUnit} from '../../../models/unit';
import {ICombat} from '../../../models/combat';
import {EffectType} from '../../models/effectType';
import {ICharacter} from '../../../models/character';

const removeTypes: EffectType[] = [
    EffectType.BLEED,
    EffectType.POISON,
    EffectType.BLIND,
    EffectType.STUN
];

export class ThiefAmuletAction extends Action {

    constructor(actor: ICharacter) {
        super(actor, 'Thief amulet', 5);
    }

    beforeResolve(combat?: ICombat, self?: ICharacter, target?: ICharacter) {
        super.beforeResolve(combat, self, target);
        self.effects = self.effects.filter(effect =>
            !removeTypes.some(type => effect.type[type])
        );
    }
}