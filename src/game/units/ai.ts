import {Unit} from '../unit';
import {fairRandom} from '../../utils/fairRandom';
import {Character} from '../character';
import {Combat} from '../combat';

export class Ai extends Unit {
    constructor(id: string, team: string, public character: Character, combat: Combat) {
        super(id);

        this.currentCombat = combat;
        this.team = team;
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