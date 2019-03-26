import {BuffAction} from '../buffAction';
import {UnholyForceEffect} from '../../effects/demon/unholyForceEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class UnholyForceAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, UnholyForceEffect, 'Unholy force', 5);
    }
}