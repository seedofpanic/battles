import {Unit} from '../unit';
import * as WebSocket from 'ws';
import {DBUser} from '../../bdTypes/DBUser';
import {IPlayer} from '../../models/player';

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

    setWS(ws: WebSocket) {
        this.ws = ws;
    }

    send(type: string, payload: any) {
        if (!this.ws || this.ws.readyState !== this.ws.OPEN) {
            return;
        }

        this.ws.send(JSON.stringify({
            type,
            payload
        }));
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
        if (!this.currentCombat) {
            return;
        }

        this.kill();
    }
}