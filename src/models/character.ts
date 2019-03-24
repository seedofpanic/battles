import {IEffect} from './effect';
import {IAction} from './action';
import {ICombat} from './combat';
import {DamageTypes} from '../game/models/damageTypes';
import {IUnit} from './unit';

export interface ICharacter {
    id: string;
    type: string;
    name: string;
    resists: { [name: string]: number };
    healthMax: number;
    actions: {[name: string]: IAction};
    action: IAction;
    health: number;
    targetId: string;
    isDead: boolean;
    effects: IEffect[];
    combat: ICombat;
    team: string;
    isValuable: boolean;
    isStunned: boolean;
    sendSkills(): void;

    isReady(): boolean;

    beforeResolve(character: ICharacter): any;

    preTick(): any;

    perform(character: ICharacter): any;

    postTick(): any;

    send(note: string, message: any): void;

    consumeUpdate(): void;

    broadcastUpdate(): void;

    sendUpdateToCharacter(character: ICharacter): void;

    setAction(action: IAction): void;

    removeCharacter(): void;

    decreaseHp(source: IEffect | IAction, value: number, damageType: DamageTypes): void;

    increaseHp(source: IEffect | IAction, value: number): void;

    getResist(damageType: DamageTypes, source: IEffect | IAction): number;

    addEffect(source: IEffect | IAction, effect: IEffect): void;

    suicide(): void;

    setUnit(unit: IUnit): void;
}