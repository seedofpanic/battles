import {fairRandom} from '../../utils/fairRandom';
import {Player} from './player';
import {Unit} from '../unit';
import {StunAction} from '../actions/stunAction';
import {getRandomCharacter} from '../../utils/getRandomCharacter';
import {getRandomSkill} from '../../utils/getRandomSkill';

export class Bot extends Player {
    isValuable = true;
    isPlayer = false;

    constructor() {
        super('bot');
    }

    beforeResolve(target: Unit) {
        if (this.isStunned) {
            this.character.action = new StunAction(this);
        } else {
            this.selectAction();
        }

        super.beforeResolve(target);
    }

    selectCharacter(): string {
        return getRandomCharacter();
    }

    selectAction() {
        this.setAction(getRandomSkill(this));
    }

    send(type: string, payload: any) {
    }

    isReady(): boolean {
        return true;
    }
}