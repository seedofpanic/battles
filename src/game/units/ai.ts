import {fairRandom} from '../../utils/fairRandom';
import {StunAction} from '../actions/stunAction';
import {Unit} from '../unit';
import {ICharacter} from '../../models/character';
import {ICombat} from '../../models/combat';

export class Ai extends Unit {
    constructor(id: string, team: string, public character: ICharacter, combat: ICombat) {
        super(id);

        this.character.combat = combat;
        this.character.team = team;
        this.character.setUnit(this);
    }

    beforeResolve(target: Unit) {
        if (this.character.isStunned) {
            this.character.action = new StunAction(this.character);
        } else {
            this.selectAction();
        }

        super.character.beforeResolve(target.character);
    }

    selectAction() {
        const actionsKeys = Object.keys(this.character.actions);
        const action = actionsKeys[fairRandom(actionsKeys.length)];

        this.setAction(action);
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