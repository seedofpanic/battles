import {IUnit} from './unit';
import {ICombat} from './combat';

export interface IAction {
    type: {[name: string]: boolean};
    name: string;
    actor: IUnit;

    beforeResolve(currentCombat: ICombat, self: IUnit, target: IUnit): void;

    perform(currentCombat: ICombat, self: IUnit, target: IUnit): void;

    tick(): void;

    isAvailable(): boolean;
}