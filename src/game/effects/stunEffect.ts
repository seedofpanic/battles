import {Effect} from '../effect';
import {Player} from '../player';
import {StunAction} from '../actions/stunAction';

const NAME = 'Stun';

export class StunEffect extends Effect {
    id = 'stun';

    constructor(roundsCount: number) {
        super(NAME, roundsCount);
    }

    tick(player: Player): boolean {
        player.character.action = new StunAction();

        return super.tick(player);
    }
}