import {DamageTypes} from './models/damageTypes';
import {EffectType} from './models/effectType';
import {IEffect} from '../models/effect';
import {IAction} from '../models/action';
import {ICharacter} from '../models/character';

export abstract class Effect implements IEffect {
    type: {[name: string]: boolean} = {
        [EffectType.MAGIC]: true
    };
    canStack = true;

    constructor(public id: string, public name: string, public roundsCount: number, public actor: ICharacter) {
    }

    onAdd(unit: ICharacter) {
    }

    onRemove(unit: ICharacter) {
    }

    preTick(unit: ICharacter) {
        this.roundsCount--;
    }

    postTick(unit: ICharacter) {
    }

    getIsEnded(): boolean {
        return this.roundsCount <= 0;
    }

    damageMod(value: number,
              type: DamageTypes, self: ICharacter, target: ICharacter, source: IAction | IEffect): number {
        return value;
    }

    resistMod(value: number, type: DamageTypes, self: ICharacter, source: IAction | IEffect): number {
        return value;
    }

    effectResistMod(value: number, effect: IEffect) {
        return value;
    }

    isStunned(value: boolean) {
        return value;
    }

    onDamage(damage: number, type: DamageTypes, self: ICharacter, source: IAction | IEffect) {
    }

    critMod(value: number, type: DamageTypes) {
        return value;
    }

    critDefMod(value: number, type: DamageTypes): number {
        return value;
    }

    critChanceDefMod(value: number, type: DamageTypes): number {
        return value;
    }

    critChanceMod(value: number, type: DamageTypes): number {
        return value;
    }

    onDeath(value: number, oldHp: number,
            damage: number, type: DamageTypes, self: ICharacter, action: IAction | IEffect): number {
        return value;
    }
}