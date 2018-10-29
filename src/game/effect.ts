import {Player} from './player';

export abstract class Effect {
    abstract id: string;

    constructor(public name: string, public roundsCount: number) {
    }

    tick(player: Player): boolean {
        this.roundsCount--;

        if (this.roundsCount <= 0) {
            player.character.effects.splice(player.character.effects.indexOf(this));
        }

        return this.roundsCount > 0;
    }
}