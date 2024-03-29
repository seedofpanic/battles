import {allowedCharacters} from './allowedCharacters';
import {IUnit} from '../models/unit';
import {ICharacter} from '../models/character';
import {StunAction} from './actions/stunAction';

export class Unit implements IUnit {
    isPlayer = false;
    isValuable = false;
    username: string;
    character: ICharacter;
    characterId: string;
    timer: NodeJS.Timer;

    constructor(public id: string) {
    }

    setAction(action: string) {
        this.character.setAction(this.character.actions[action]);
    }

    kill() {
        if (!this.character) {
            return;
        }

        this.character.setUnit(null);
        this.character.setAction(new StunAction(this.character));
        this.character.suicide();
        this.send('set_in_battle', false);
    }

    getName() {
        return this.character.name;
    }

    setCharacter(characterId: string) {
        if (allowedCharacters[characterId]) {
            this.characterId = characterId;
        } else {
            this.send('error', 'Unexpected character name');
        }
    }

    send(type: string, payload: any) {
    }

    broadcastUpdate() {
        this.character.broadcastUpdate();
    }

    createNewCharacter(): ICharacter {
        if (!this.characterId) {
            return;
        }

        this.character = new (allowedCharacters[this.characterId].create)(this.characterId);
        this.character.setUnit(this);

        return this.character;
    }
}