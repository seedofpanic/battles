import {ICharacter} from '../models/character';
import {IAction} from '../models/action';
import {IEffect} from '../models/effect';

export abstract class Character implements ICharacter {
    abstract name: string;
    abstract healthMax: number;
    abstract health: number;
    action: IAction;
    isDead: boolean;
    abstract actions: {[name: string]: IAction};
    abstract resists: {[name: string]: number};
    effects: IEffect[] = [];

    constructor(public id: string) {

    }
}