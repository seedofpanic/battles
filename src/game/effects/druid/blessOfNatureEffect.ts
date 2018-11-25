import {Effect} from '../../effect';
import {Unit} from '../../unit';

export class BlessOfNatureEffect extends Effect {
    resistsArr = ['poison', 'cutting', 'stun'];

    constructor(actor: Unit) {
        super('bless_of_nature', 'Bless of nature', 3, actor);
    }

    effectResistMod(value: number, effectId: string) {
        if (this.resistsArr.some(resist => resist === effectId)) {
            return 0;
        }

        return value;
    }
}