import {fairRandom} from '../../utils/fairRandom';
import {Player} from './player';
import {Unit} from '../unit';
import {StunAction} from '../actions/stunAction';
import {getRandomCharacter} from '../../utils/getRandomCharacter';
import {getRandomSkill} from '../../utils/getRandomSkill';

export class Bot extends Player {
    isValuable = true;
    isPlayer = false;
    get characterId(): string {
        return getRandomCharacter();
    }

    constructor() {
        super('bot');
    }

    selectAction() {
        this.setAction(getRandomSkill(this));
    }

    send(type: string, payload: any) {
        if (type === 'select_skill') {
            if (this.character.isStunned) {
                this.character.action = new StunAction(this.character);
            } else {
                this.selectAction();
            }
        }
    }

    isReady(): boolean {
        return true;
    }
}