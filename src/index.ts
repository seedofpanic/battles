import * as express from 'express';
import * as expressWs from 'express-ws';
import {Game} from './game/game';
import {Player} from './game/player';

const game = new Game();

export const app = expressWs(express()).app;

function doAction(player: Player, msg: any) {
    switch (msg.action) {
        case 'ready':
            game.selectCharacter(player, msg.characterId);
            break;
        case 'invite':
            game.startDuel(player, null);
            break;
        case 'stop':
            game.combatsQueue.splice(game.combatsQueue.indexOf(player.currentCombat), 1);
            player.currentCombat = undefined;

            player.send('note', 'Вы покинули очередь');
            break;
        case 'act':
            const combat = player.currentCombat;

            try {
                if (player.action) {
                    player.send('error', 'Действие уже выбрано');

                    return;
                }

                if (player.actions[msg.action] && player.actions[msg.action].isAvailable()) {
                    player.send('note', 'Вы собрались ударить ' + msg.action);
                } else {
                    player.send('error', `Действие ${msg.action} сейчас не доступно`);

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
                    player.send('note', 'ожидаем противника');
                }
            } catch (e) {
                console.log(e);
            }
            break;
        case 'start':
            game.startDuel(player, msg.combatId || null);
            break;
        case 'info':
            player.send('note', `Боев сыграно ${game.combatsEnded} 
                В данный момент идет ${game.combatsCount - game.combatsEnded} боев`);
            break;
        case 'auth':
            break;
        default:
    }
}

app.ws('/ws', (ws, req) => {
    const player = game.addPlayer(Math.random().toString());

    player.setWS(ws);

    ws.on('message', msg => {
        try {
            doAction(player, JSON.parse(msg.toString()));
        } catch (e) {
            console.error(e);
        }
    });
});

app.listen('3003', () => {
    console.log('Listening...');
});