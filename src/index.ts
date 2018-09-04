import * as express from 'express';
import * as expressWs from 'express-ws';
import {Game} from './game/game';
import {Combat} from './game/combat';
import * as WebSocket from 'ws';

const game = new Game();

export const app = expressWs(express()).app;

function wsOnJson<T>(ws: WebSocket, name: string, callback: (msg: T) => void) {
    ws.on(name, msg => {
        try {
            callback(JSON.parse(msg));
        } catch (e) {
            console.error(e);
        }
    });
}

app.ws('/ws', (ws, req) => {
    const player = game.addPlayer(Math.random().toString(), req.body.username);

    wsOnJson<{characterId: string}>(ws,'ready', (msg) => {
        game.selectCharacter(player, msg.characterId);
    });

    ws.on('invite', (msg) => {
        game.startDuel(player, null);
    });

    ws.on('stop', (msg) => {
        const chatId = msg.chat.id.toString();
        const player = game.players[chatId];

        game.combatsQueue.splice(game.combatsQueue.indexOf(player.currentCombat), 1);
        player.currentCombat = undefined;

        ws.send('Вы покинули очередь');
    });

    wsOnJson<{action: string}>(ws, 'act', (msg) => {
        const combat = player.currentCombat;

        try {
            if (player.action) {
                ws.send('Действие уже выбрано');

                return;
            }

            if (player.actions[msg.action] && player.actions[msg.action].isAvailable()) {
                ws.send('Вы собрались ударить ' + msg.action);
            } else {
                ws.send(`Действие ${msg.action} сейчас не доступно`);

                return;
            }

            player.setAction(msg.action);

            if (combat.allReady()) {
                combat.perform();
                combat.showResult();

                if (combat.isEnded) {
                    game.combatsEnded++;
                }
            } else {
                ws.send('ожидаем противника');
            }
        } catch (e) {
            console.log(e);
        }
    });

    wsOnJson<{combatId: string}>(ws, 'start', (msg) => {
        game.startDuel(player, msg.combatId || null);
    });

    ws.on('info', (msg) => {
        ws.send(`Боев сыграно ${game.combatsEnded} В данный момент идет ${game.combatsCount - game.combatsEnded} боев`);
    });
});

app.listen('3003', () => {
    console.log('Listening...');
});