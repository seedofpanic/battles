import {ICombat} from './combat';
import {ICharacter} from './character';

export interface IAction {
    type: {[name: string]: boolean};
    name: string;
    actor: ICharacter;

    beforeResolve(currentCombat: ICombat, self: ICharacter, target: ICharacter): void;

    perform(currentCombat: ICombat, self: ICharacter, target: ICharacter): void;

    tick(): void;

    isAvailable(): boolean;
}