import {BuffAction} from '../buffAction';
import {IUnit} from '../../../models/unit';
import {BoneArmorEffect} from '../../effects/necromancer/boneArmorEffect';
import {ICharacter} from '../../../models/character';

export class BoneArmorAction extends BuffAction {
    constructor(actor: ICharacter) {
        super(actor, BoneArmorEffect, 'Bone armor', 5);
    }
}