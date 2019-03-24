import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {IAction} from '../../models/action';
import {IUnit} from '../../models/unit';
import {FarLungeAction} from '../actions/amazon/farLungeAction';
import {BladesWhirlwindAction} from '../actions/amazon/bladesWhirlwindAction';
import {DefenceStanceAction} from '../actions/amazon/defenceStanceAction';
import {BattleCryAction} from '../actions/amazon/battleCryAction';
import {SecondWindAction} from '../actions/amazon/secondWindAction';
import {BattleStatnceAction} from '../actions/amazon/battleStatnceAction';
import {SuppressShoutAction} from '../actions/amazon/suppressShoutAction';
import {SpearThrowAction} from '../actions/amazon/spearThrowAction';

export class Amazon extends Character {
    actions: { [name: string]: IAction };
    health = 100;
    healthMax = 100;
    name = 'Amazon';
    resists = {
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1,
    };

    constructor(id: string) {
        super(id);

        this.actions = {
            'far_lunge': new FarLungeAction(this),
            'blades_whirlwind': new BladesWhirlwindAction(this),
            'defence_stance': new DefenceStanceAction(this),
            'battle_cry': new BattleCryAction(this),
            'second_wind': new SecondWindAction(this),
            'battle_stance': new BattleStatnceAction(this),
            'suppress_shout': new SuppressShoutAction(this),
            'spear_throw': new SpearThrowAction(this)
        };
    }
}