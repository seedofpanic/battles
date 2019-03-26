import {Character} from '../character';
import {DamageTypes} from '../models/damageTypes';
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
        [DamageTypes.POISON]: 1.25,
        [DamageTypes.DEATH]: 1.25,
        [DamageTypes.HOLY]: 1,
        [DamageTypes.SHADOW]: 1.25,
        [DamageTypes.BLUNT]: 1.25,
        [DamageTypes.CUTTING]: 1.25,
        [DamageTypes.PIERCING]: 1.25,
        [DamageTypes.FIRE]: 0.75,
        [DamageTypes.FROST]: 0.75
    };

    constructor(id: string) {
        super(id);

        this.actions = {
            'music_power': new MusicPowerAction(this),
            'stunning_song': new StunningSongAction(this),
            'ear_bleed': new EarBleedAction(this),
            'healing_melody': new HealingMelodyAction(this),
            'demoralize': new DemoralizeAction(this),
            'knife_throw': new KnifeThrowAction(this),
            'guitar_strike': new GuitarStrikeAction(this),
            'immunity': new ImmunityAction(this),
        };
    }
}