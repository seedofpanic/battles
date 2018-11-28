import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {BoneArmorEffect} from '../../effects/necromancer/boneArmorEffect';

export class BoneArmorAction extends BuffAction {
    constructor(actor: IUnit) {
        super(actor, BoneArmorEffect, 'Bone armor', 5);
    }
}