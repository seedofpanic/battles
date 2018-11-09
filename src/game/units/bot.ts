import {allowedCharacters} from '../allowedCharacters';
import {fairRandom} from '../../utils/fairRandom';
import {Player} from './player';
import {Unit} from '../unit';
import {StunAction} from '../actions/stunAction';

export class Bot extends Player {
    isValuable = true;

    constructor() {
        super('bot');
    }

    beforeResolve(target: Unit) {
        if (this.isStunned) {
            this.character.action = new StunAction();
        } else {
            this.selectAction();
        }

        super.beforeResolve(target);
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
        return true;
    }
}