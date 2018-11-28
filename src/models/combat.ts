import {IUnit} from './unit';
import {IPlayer} from './player';

export interface ICombat {
    isEnded: boolean;
    units: {[name: string]: IUnit};
    unitsArr: IUnit[];
    battleLog: string[];

    isReadyToStart(): boolean;

    start(): void;

    allReady(): any;

    perform(): void;

    showResult(): void;

    addPlayer(player: IPlayer): void;

    isFull(): boolean;

    removeUnit(self: IUnit): void;

    addSummon(unit: IUnit): void;
}