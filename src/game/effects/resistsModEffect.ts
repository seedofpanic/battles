import {Effect} from '../effect';

export class ResistsModEffect extends Effect {
    canStack = false;
    id = 'resists_mod';

    constructor(private mod: number, name: string, roundsCount: number) {
        super(name, roundsCount);
    }

    resistMod(value: number): number {
        return value * this.mod;
    }
}