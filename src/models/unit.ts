import {ICombat} from './combat';
import {ICharacter} from './character';
import {DamageTypes} from '../game/models/damageTypes';
import {IEffect} from './effect';
import {IAction} from './action';

export interface IUnit {
    id: string;
    isValuable: boolean;
    team: string;
    character: ICharacter;
    targetId: string;
    currentCombat: ICombat;

    isReady(): boolean;

    beforeResolve(iUnit: IUnit): any;

    preTick(): any;

    perform(iUnit: IUnit): any;

    postTick(): any;

    broadcastUpdate(): void;

    send(note: string, s: any): void;

    sendSkills(): void;

    getName(): string;

    decreaseHp(source: IEffect | IAction, value: number, damageType: DamageTypes): void;

    getResist(damageType: DamageTypes, source: IEffect | IAction): number;

    addEffect(source: IEffect | IAction, effect: IEffect): void;

    sendUpdateToPlayer(self: IUnit): void;

    setCharacter(character: string): void;

    increaseHp(source: IEffect | IAction, value: number): void;

    kill(): void;

    clearTimer(): void;
}