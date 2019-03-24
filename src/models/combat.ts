import {ICharacter} from './character';

export interface ICombat {
    isEnded: boolean;
    characters: {[name: string]: ICharacter};
    charactersArr: ICharacter[];
    battleLog: string[];

    isReadyToStart(): boolean;

    start(): void;

    allReady(): any;

    perform(): void;

    showResult(): void;

    addCharacter(character: ICharacter, team?: string): void;

    isFull(): boolean;

    removeCharacter(character: ICharacter): void;

    sendHealth(): void;

    checkIsEnded(): void;
}