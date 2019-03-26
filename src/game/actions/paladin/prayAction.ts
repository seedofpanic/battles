import {BuffAction} from '../buffAction';
import {PrayEffect} from '../../effects/paladin/prayEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class PrayAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, PrayEffect, 'Pray', 5);
    }
}