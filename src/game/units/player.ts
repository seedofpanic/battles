import {Unit} from '../unit';
import * as WebSocket from 'ws';
import {DBUser} from '../../bdTypes/DBUser';
import {IPlayer} from '../../models/player';
import {Game} from '../game';
import {getRandomSkill} from '../../utils/getRandomSkill';

export class Player extends Unit implements IPlayer {
    private ws: WebSocket;
    isValuable = true;
    played = 0;
    userId: any;
    isPlayer = true;

    constructor(id: string, user?: DBUser) {
        super(id);

        if (user) {
            this.updateFromUser(user);
        }
    }

    setAction(action: string) {
        this.clearTimer();
        super.setAction(action);
    }

    setWS(ws: WebSocket) {
        this.ws = ws;
    }

    send(type: string, payload: any) {
        if (!this.ws || this.ws.readyState !== this.ws.OPEN) {
            return;
        }

        this.sendHooks(type, payload);

        this.ws.send(JSON.stringify({
            type,
            payload
        }));
    }

    private sendHooks(type: string, payload: any) {
        if (type === 'select_skill') {
            const skillSelectTimer = 20;
            this.send('show_timer', skillSelectTimer);
            this.clearTimer();
            this.timer = setTimeout(() => {
                if (this.character) {
                    Game.setAction(this as any, getRandomSkill(this));
                }
            }, skillSelectTimer * 1000);
        }
    }

    clearTimer() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    getUserData(): DBUser {
        return {
            _id: this.userId,
            played: this.played,
        };
    }

    updateFromUser(user: DBUser) {
        this.played = user.played;
        this.userId = user._id;
    }

    endCombat() {
        if (!this.character) {
            return;
        }

        this.kill();
    }

    leaveCombat() {
        if (!this.character) {
            return;
        }

        this.character.combat.charactersArr.forEach(character => {
            if (character === this.character) {
                character.send('note', "You left the game");
            } else {
                character.send('note', "Player " + character.name + " left the game");
            }
        });

        this.kill();
    }
}