import {allowedCharacters} from '../game/allowedCharacters';
import {fairRandom} from './fairRandom';

export function getRandomCharacter(): string {
    const allowedCharactersKeys = Object.keys(allowedCharacters);

    return allowedCharactersKeys[fairRandom(allowedCharactersKeys.length)];
}