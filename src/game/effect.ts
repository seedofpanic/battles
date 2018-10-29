import {Player} from './player';

export abstract class Effect {
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
}