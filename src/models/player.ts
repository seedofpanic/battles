import {IUnit} from './unit';

export interface IPlayer extends IUnit {
    played: number;
    timer: NodeJS.Timer;

    setAction(action: string): void;
}