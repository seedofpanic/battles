import {Unit} from '../unit';
import {fairRandom} from '../../utils/fairRandom';
import {Character} from '../character';
import {Combat} from '../combat';
import {Action} from '../action';
import {Effect} from '../effect';
import {StunAction} from '../actions/stunAction';

export class Ai extends Unit {
    constructor(id: string, team: string, public character: Character, combat: Combat) {
        super(id);

        this.currentCombat = combat;
        this.team = team;
    }

    beforeResolve(target: Unit) {
        if (this.isStunned) {
            this.character.action = new StunAction();
        } else {
            this.selectAction();
        }

        super.beforeResolve(target);
    }

    selectAction() {
        const actionsKeys = Object.keys(this.character.actions);
        const action = actionsKeys[fairRandom(actionsKeys.length)];

        this.setAction(action);
    }

    send(type: string, payload: any) {
    }

    isReady(): boolean {
        return true;
    }

    decreaseHp(action: Action | Effect, damage: number) {
        super.decreaseHp(action, damage);

        if (this.character.isDead) {
            this.currentCombat.removeUnit(this);
        }
    }
}