import {HitAction} from './hitAction';
import {DamageTypes} from '../models/damageTypes';
import {Combat} from '../combat';
import {Player} from '../player';

export class BloodSacrificeAction extends HitAction {
    constructor() {
        super('Blood sacrifice', 0, 0, DamageTypes.SHADOW);
    }

    perform(combat: Combat, player?: Player, target?: Player) {
        const health = player.character.health / 2;

        player.character.health = health;

        this.minDamage = health;
        this.maxDamage = health;

        super.perform(combat, player, target);
    }
}