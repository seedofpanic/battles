import {IUnit} from './unit';
import {ICombat} from './combat';

export interface IAction {
    name: string;
    actor: IUnit;

    beforeResolve(currentCombat: ICombat, self: IUnit, target: IUnit): void;

    perform(currentCombat: ICombat, self: IUnit, target: IUnit): void;

    tick(): void;

    isAvailable(): boolean;
}