import {HitAction} from '../hitAction';
import {DamageTypes} from '../../models/damageTypes';
import {IUnit} from '../../../models/unit';
import {ICharacter} from '../../../models/character';

export class ShurikenHurlAction extends HitAction {
    constructor(actor: ICharacter) {
        super(actor, 'Shuriken hurl', 3, 5, DamageTypes.PIERCING, 0.12, 1.3);
    }
}