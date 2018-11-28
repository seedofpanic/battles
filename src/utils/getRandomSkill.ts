import {fairRandom} from './fairRandom';
import {IUnit} from '../models/unit';

export function getRandomSkill(player: IUnit) {
    const actionsKeys = Object.keys(player.character.actions)
        .filter(actionId => {
            return player.character.actions[actionId].isAvailable();
        });

    return actionsKeys[fairRandom(actionsKeys.length)];
}