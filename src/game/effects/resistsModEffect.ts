import {Effect} from '../effect';
import {DamageTypes} from '../models/damageTypes';
import {IUnit} from '../../models/unit';
import {IAction} from '../../models/action';
import {IEffect} from '../../models/effect';
import {ICharacter} from '../../models/character';

export class ResistsModEffect extends Effect {
    canStack = false;

    constructor(id: string, private mod: number | {[name: string]: number},
                name: string, roundsCount: number, actor: ICharacter) {
        super(id, name, roundsCount, actor);
    }

    resistMod(value: number, type: DamageTypes, self: ICharacter, source: IAction | IEffect): number {
        if (typeof this.mod === 'object') {
            return value * (this.mod[type] || 1);
        } else {
            return value * this.mod;
        }
    }
}