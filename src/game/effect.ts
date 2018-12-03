import {DamageTypes} from './models/damageTypes';
import {EffectType} from './models/effectType';
import {IUnit} from '../models/unit';
import {IEffect} from '../models/effect';
import {IAction} from '../models/action';

export abstract class Effect implements IEffect {
    type = EffectType.MAGIC;
    canStack = true;

    constructor(public id: string, public name: string, public roundsCount: number, public actor: IUnit) {
    }

    onAdd(unit: IUnit) {
    }

    onRemove(unit: IUnit) {
    }

    preTick(unit: IUnit) {
        this.roundsCount--;
    }

    postTick(unit: IUnit) {
    }

    getIsEnded(): boolean {
        return this.roundsCount <= 0;
    }

    damageMod(value: number, type: DamageTypes, self: IUnit, target: IUnit): number {
        return value;
    }

    resistMod(value: number, type: DamageTypes, self: IUnit, source: IAction | IEffect): number {
        return value;
    }

    effectResistMod(value: number, effectType: EffectType) {
        return value;
    }

    isStunned(value: boolean) {
        return value;
    }

    onDamage(damage: number, type: DamageTypes, self: IUnit, source: IAction | IEffect) {
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
            damage: number, type: DamageTypes, self: IUnit, action: IAction | IEffect): number {
        return value;
    }
}