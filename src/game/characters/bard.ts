import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
import {IUnit} from '../../models/unit';
import {IAction} from '../../models/action';
import {MusicPowerAction} from '../actions/bard/musicPowerAction';
import {StunningSongAction} from '../actions/bard/stunningSongAction';
import {EarBleedAction} from '../actions/bard/earBleedAction';
import {HealingMelodyAction} from '../actions/bard/healingMelodyAction';
import {DemoralizeAction} from '../actions/bard/demoralizeAction';
import {KnifeThrowAction} from '../actions/bard/knifeThrowAction';
import {GuitarStrikeAction} from '../actions/bard/guitarStrikeAction';
import {ImmunityAction} from '../actions/bard/immunityAction';

export class Bard extends Character {
    actions: {[name: string]: IAction};
    health = 120;
    healthMax = 120;
    name = 'Bard';
    resists = {
        [DamageTypes.BLUNT]: 1,
        [DamageTypes.CUTTING]: 1,
        [DamageTypes.FIRE]: 1,
        [DamageTypes.FROST]: 1,
    };

    constructor(actor: IUnit, id: string) {
        super(id);

        this.actions = {
            'music_power': new MusicPowerAction(actor),
            'stunning_song': new StunningSongAction(actor),
            'ear_bleed': new EarBleedAction(actor),
            'healing_melody': new HealingMelodyAction(actor),
            'demoralize': new DemoralizeAction(actor),
            'knife_throw': new KnifeThrowAction(actor),
            'guitar_strike': new GuitarStrikeAction(actor),
            'immunity': new ImmunityAction(actor),
        };
    }
}