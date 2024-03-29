import {DamageTypes} from '../models/damageTypes';
import {HitAction} from './hitAction';
import {IUnit} from '../../models/unit';
import {ICharacter} from '../../models/character';

const NAME = 'Slash';
const MIN_DAMAGE = 5;
const MAX_DAMAGE = 7;
const CRIT_CHANCE = 0.2;
const CRIT_MULTIPLIER = 2;

export class SwordAction extends HitAction {
    constructor(actor: ICharacter) {
        super(
            actor,
            NAME,
            MIN_DAMAGE,
            MAX_DAMAGE,
            DamageTypes.CUTTING,
            CRIT_CHANCE,
            CRIT_MULTIPLIER
        );
    }
}