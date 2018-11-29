import {IUnit} from './unit';

export interface IPlayer extends IUnit {
    played: number;
    timer: NodeJS.Timer;
    isPlayer: boolean;
    consumeUpdate(): void;

    clearTimer(): void;

    setAction(action: string): void;
}