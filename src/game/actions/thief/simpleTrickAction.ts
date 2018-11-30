import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {SimpleTrickEffect} from '../../effects/thief/simpleTrickEffect';

export class SimpleTrickAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, SimpleTrickEffect, 'Simple trick', 5);
    }
}