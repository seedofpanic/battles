import {Player} from './player';
import {DamageTypes} from './models/damageTypes';

export abstract class Effect {
    canStack = true;
    abstract id: string;

    constructor(public name: string, public roundsCount: number) {
    }

    preTick(player: Player) {
        this.roundsCount--;
    }

    postTick(player: Player) {
    }

    getIsEnded(): boolean {
        return this.roundsCount <= 0;
    }

    damageMod(value: number, type: DamageTypes): number {
        return value;
    }
}