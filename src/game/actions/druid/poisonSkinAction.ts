import {BuffAction} from '../buffAction';
import {PoisonSkinEffect} from '../../effects/druid/poisonSkinEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class PoisonSkinAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, PoisonSkinEffect, 'Poison skin', 4);
    }
}