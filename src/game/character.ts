import {Action} from './action';
import {Effect} from './effect';

export abstract class Character {
    abstract name: string;
    abstract healthMax: number;
    abstract health: number;
    action: Action;
    isDead: boolean;
    abstract actions: {[name: string]: Action};
    abstract resists: {[name: string]: number};
    effects: Effect[] = [];
}