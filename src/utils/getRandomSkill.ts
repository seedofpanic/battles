import {fairRandom} from './fairRandom';
import {Unit} from '../game/unit';

export function getRandomSkill(player: Unit) {
    const actionsKeys = Object.keys(player.character.actions)
        .filter(actionId => {
            return player.character.actions[actionId].isAvailable();
        });

    return actionsKeys[fairRandom(actionsKeys.length)];
}