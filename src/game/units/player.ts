import {Unit} from '../unit';
import * as WebSocket from 'ws';

export class Player extends Unit {
    private ws: WebSocket;
    isValuable = true;
    played = 0;

    setWS(ws: WebSocket) {
        this.ws = ws;
    }

    send(type: string, payload: any) {
        if (this.ws.readyState !== this.ws.OPEN) {
            return;
        }

        this.ws.send(JSON.stringify({
            type,
            payload
        }));
    }
}