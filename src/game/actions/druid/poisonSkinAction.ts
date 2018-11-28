import {BuffAction} from '../buffAction';
import {PoisonSkinEffect} from '../../effects/druid/poisonSkinEffect';
import {IUnit} from '../../../models/unit';

export class PoisonSkinAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, PoisonSkinEffect, 'Poison skin', 4);
    }
}