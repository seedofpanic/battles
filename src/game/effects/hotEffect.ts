import {Effect} from '../effect';
import {Player} from '../player';
import {DamageTypes} from '../models/damageTypes';
import {Game} from '../game';

export class HotEffect extends Effect {
    id = 'hot';

    constructor(name: string,
                private minHeal: number,
                private maxHeal: number,
                private type: DamageTypes,
                roundsCount: number,
    ) {
        super(name, roundsCount);
    }

    preTick(player: Player) {
        player.increaseHp(this, Game.calcDamage(this.minHeal, this.maxHeal));
        super.preTick(player);
    }
}