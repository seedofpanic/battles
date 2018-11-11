import {StunEffect} from '../../effects/stunEffect';
import {Combat} from '../../combat';
import {Unit} from '../../unit';
import {Action} from '../../action';
import {BurningDotEffect} from '../../effects/burningDotEffect';

export class MagicalBurnAction extends Action {
    constructor(source: Unit) {
        super(source, 'Magical burn', 5);
    }

    perform(combat: Combat, self?: Unit, target?: Unit) {
        super.perform(combat, self, target);

        if (Math.random() > 0.5) {
            target.addEffect(this, new StunEffect(1, self));
            target.addEffect(this, new BurningDotEffect(5, 5, 2, self));
        }
    }
}