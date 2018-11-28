import {IEffect} from './effect';
import {IAction} from './action';

export interface ICharacter {
    id: string;
    name: string;
    resists: { [name: string]: number };
    healthMax: number;
    actions: {[name: string]: IAction};
    action: IAction;
    health: number;
    isDead: boolean;
    effects: IEffect[];
}