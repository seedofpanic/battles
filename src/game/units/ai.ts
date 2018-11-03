import {Unit} from '../unit';
import {fairRandom} from '../../utils/fairRandom';
import {Character} from '../character';
import {Combat} from '../combat';

export class Ai extends Unit {
    constructor(id: string, public character: Character, combat: Combat) {
        super(id);

        this.currentCombat = combat;
    }

    selectAction() {
        const actionsKeys = Object.keys(this.character.actions);

        console.log(actionsKeys);

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