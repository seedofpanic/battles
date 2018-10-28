import {Player} from './player';

export abstract class Effect {
    constructor(public name: string, private roundsCount: number) {
    }

    tick(player: Player): boolean {
        this.roundsCount--;

        if (this.roundsCount <= 0) {
            player.character.effects.splice(player.character.effects.indexOf(this));
        }

        return this.roundsCount > 0;
    }
}