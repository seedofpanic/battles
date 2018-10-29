import {Player} from './player';
import {allowedCharacters, Game} from './game';

export function fairRandom(max: number): number {
    return Math.floor((Math.random() * (max - 0.000001)));
}

export class Bot extends Player {
    constructor(game: Game) {
        super('bot');

        const allowedCharactersKeys = Object.keys(allowedCharacters);
        const characterId = allowedCharactersKeys[fairRandom(allowedCharactersKeys.length - 1)];

        game.startCombat(this);
        game.selectCharacter(this, characterId);
    }

    send(type: string, payload: any) {
        if (type === 'select_skill') {
            const actionsKeys = Object.keys(this.character.actions);

            this.setAction(
                actionsKeys[fairRandom(actionsKeys.length - 1)]
            );
        }
    }
}