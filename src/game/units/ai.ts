import {fairRandom} from '../../utils/fairRandom';
import {StunAction} from '../actions/stunAction';
import {DamageTypes} from '../models/damageTypes';
import {Unit} from '../unit';
import {ICharacter} from '../../models/character';
import {ICombat} from '../../models/combat';
import {IEffect} from '../../models/effect';
import {IAction} from '../../models/action';

export class Ai extends Unit {
    constructor(id: string, team: string, public character: ICharacter, combat: ICombat) {
        super(id);

        this.currentCombat = combat;
        this.team = team;
    }

    beforeResolve(target: Unit) {
        if (this.isStunned) {
            this.character.action = new StunAction(this);
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

    decreaseHp(action: IAction | IEffect, damage: number, type: DamageTypes) {
        super.decreaseHp(action, damage, type);

        if (this.character.isDead) {
            this.currentCombat.removeUnit(this);
        }
    }
}