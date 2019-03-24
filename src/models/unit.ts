import {ICharacter} from './character';

export interface IUnit {
    id: string;
    character: ICharacter;
    isPlayer: boolean;
    isValuable: boolean;
    characterId: string;

    broadcastUpdate(): void;

    send(note: string, s: any): void;

    getName(): string;

    createNewCharacter(): ICharacter;

    setCharacter(character: string): void;

    kill(): void;
}