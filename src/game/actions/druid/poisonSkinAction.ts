import {BuffAction} from '../buffAction';
import {Unit} from '../../unit';
import {PoisonSkinEffect} from '../../effects/druid/poisonSkinEffect';

export class PoisonSkinAction extends BuffAction {
    constructor(actor: Unit) {
        super(actor, PoisonSkinEffect, 'Poison skin', 4);
    }
}