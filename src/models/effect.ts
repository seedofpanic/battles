import {DamageTypes} from '../game/models/damageTypes';
import {IAction} from './action';
import {ICharacter} from './character';

export interface IEffect {
    id: string;
    canStack: boolean;
    type: {[name: string]: boolean};
    roundsCount: number;
    name: string;
    actor: ICharacter;

    getIsEnded(): boolean;

    critMod(value: number, type: DamageTypes): number;

    critDefMod(value: number, type: DamageTypes): number;

    damageMod(value: number, type: DamageTypes,
              self: ICharacter, target: ICharacter, source: IAction | IEffect): number;

    isStunned(result: boolean): boolean;

    onDamage(damage: number, type: DamageTypes, self: ICharacter, action: IAction | IEffect): any;

    resistMod(value: number, type: DamageTypes, self: ICharacter, source: IAction | IEffect): any;

    effectResistMod(value: number, effect: IEffect): number;

    preTick(self: ICharacter): void;

    postTick(self: ICharacter): void;

    critChanceMod(value: number, type: DamageTypes): number;

    critChanceDefMod(value: number, type: DamageTypes): number;

    onAdd(unit: ICharacter): void;

    onRemove(unit: ICharacter): void;

    onDeath(value: number, oldHp: number,
            damage: number, type: DamageTypes, self: ICharacter, action: IAction | IEffect): number;
}