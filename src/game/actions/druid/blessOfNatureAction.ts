import {BuffAction} from '../buffAction';
import {BlessOfNatureEffect} from '../../effects/druid/blessOfNatureEffect';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class BlessOfNatureAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, BlessOfNatureEffect, 'Bless of nature', 6);
    }
}