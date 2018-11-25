import {Action} from '../../action';
import {Unit} from '../../unit';
import {Combat} from '../../combat';
import {VanishEffect} from '../../effects/ninja/VanishEffect';

export class VanishAction extends Action {
    constructor(actor: Unit) {
        super(actor, 'Vanish', 6);
    }

    beforeResolve(combat?: Combat, self?: Unit, target?: Unit) {
        super.beforeResolve(combat, self, target);

        self.addEffect(this, new VanishEffect(this.actor));
    }
}