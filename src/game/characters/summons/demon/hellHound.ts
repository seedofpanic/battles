import {Action} from '../../../action';
import {DamageTypes} from '../../../models/damageTypes';
import {Unit} from '../../../unit';
import {HitAction} from '../../../actions/hitAction';
import {Character} from '../../../character';

export class HellHound extends Character {
    actions: { [name: string]: Action };
    health = 20;
    healthMax = 20;
    name = 'Hell hound';
    resists = {
        [DamageTypes.BLUNT]: 1.3,
        [DamageTypes.CUTTING]: 0.9,
        [DamageTypes.FIRE]: 1.2,
        [DamageTypes.FROST]: 1.1,
    };

    constructor(actor: Unit, id: string) {
        super(id);

        this.actions = {
            'bite': new HitAction(actor, 'Bite', 1, 3, DamageTypes.CUTTING)
        };
    }
}