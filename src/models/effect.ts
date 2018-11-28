import {DamageTypes} from '../game/models/damageTypes';
import {IUnit} from './unit';
import {IAction} from './action';
import {EffectType} from '../game/models/effectType';

export interface IEffect {
    id: string;
    canStack: boolean;
    type: EffectType;
    roundsCount: number;
    name: string;
    actor: IUnit;

    getIsEnded(): boolean;

    critMod(result: number, type: DamageTypes): number;

    damageMod(result: number, type: DamageTypes, self: IUnit, target: IUnit): number;

    isStunned(result: boolean): boolean;

    onDamage(damage: number, type: DamageTypes, self: IUnit, action: IAction | IEffect): any;

    resistMod(result: number, type: DamageTypes, self: IUnit, source: IAction | IEffect): any;

    effectResistMod(result: number, type: EffectType): number;

    preTick(self: IUnit): void;

    postTick(self: IUnit): void;
}