import {Effect} from '../effect';

export class DamageModEffect extends Effect {
    canStack = false;
    id = 'damage_mod';

    constructor(name: string, roundsCount: number) {
        super(name, roundsCount);
    }

    damageMod(value: number): number {
        return value * 1.3;
    }
}