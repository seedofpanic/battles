import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {RagingFlamesAction} from '../actions/demon/ragingFlamesAction';
import {HardenedSkinAction} from '../actions/demon/hardenedSkinAction';
import {ScytheStrikeAction} from '../actions/demon/scytheStrikeAction';
import {HellsistanceAction} from '../actions/demon/hellsistanceAction';
import {UnholyForceAction} from '../actions/demon/unholyForceAction';
import {HellBlastAction} from '../actions/demon/hellBlastAction';
import {HellHoundAction} from '../actions/demon/hellHoundAction';
import {InfernoAction} from '../actions/demon/InfernoAction';
import {IAction} from '../../models/action';
import {IUnit} from '../../models/unit';

export class Demon extends Character {
    actions: { [name: string]: IAction };
    health = 120;
    healthMax = 120;
    name = 'Demon';
    resists = {
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1,
    };

    constructor(actor: IUnit, id: string) {
        super(id);

        this.actions = {
            'raging_flames': new RagingFlamesAction(actor),
            'hardened_skin': new HardenedSkinAction(actor),
            'scythe_strike': new ScytheStrikeAction(actor),
            'hellsistance': new HellsistanceAction(actor),
            'unholly_force': new UnholyForceAction(actor),
            'hell_blast': new HellBlastAction(actor),
            'hell_hound': new HellHoundAction(actor),
            'inferno': new InfernoAction(actor)
        };
    }
}