import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {SmokeScreenEffect} from '../../effects/ranger/smokeScreenEffect';

export class SmokeScreenAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, SmokeScreenEffect, 'Smoke screen', 5);
    }
}