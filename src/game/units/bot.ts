import {allowedCharacters} from '../allowedCharacters';
import {Unit} from '../unit';
import {fairRandom} from '../../utils/fairRandom';

export class Bot extends Unit {
    constructor() {
        super('bot');
    }

    selectCharacter() {
        const allowedCharactersKeys = Object.keys(allowedCharacters);

        return allowedCharactersKeys[fairRandom(allowedCharactersKeys.length)];
    }

    selectAction() {
        const actionsKeys = Object.keys(this.character.actions);

        this.setAction(
            actionsKeys[fairRandom(actionsKeys.length)]
        );
    }

    send(type: string, payload: any) {
    }

    isReady(): boolean {
        this.selectAction();

        return super.isReady();
    }
}