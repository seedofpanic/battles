import {Effect} from '../effect';

export class ShieldOfAngerEffect extends Effect {
    id = 'shield_of_anger';

    constructor() {
        super('Shield of anger', 3);
    }

    resistMod(value: number): number {
        return value * 1.2;
    }

    damageMod(value: number): number {
        return value * 1.1;
    }
}