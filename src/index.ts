import * as express from 'express';
import * as expressWs from 'express-ws';
import {Game} from './game/game';
import {Player} from './game/player';

const game = new Game();

export const app = expressWs(express()).app;

function doAction(player: Player, action: any) {
    switch (action.type) {
        case 'select_character':
        case 'ready':
            game.selectCharacter(player, action.payload);
            break;
        case 'start':
            game.startCombat(player);
            break;
        case 'invite':
            game.startDuel(player, null);
            break;
        case 'join':
            game.startDuel(player, action.combatId || null);
            break;
        case 'stop':
            game.combatsQueue.splice(game.combatsQueue.indexOf(player.currentCombat), 1);
            player.currentCombat = undefined;

            player.send('note', 'Вы покинули очередь');
            break;
        case 'select_skill':
            const combat = player.currentCombat;

            try {
                if (player.action) {
                    player.send('error', 'Действие уже выбрано');

                    return;
                }

                if (player.actions[action.payload] && player.actions[action.payload].isAvailable()) {
                    player.send('note', 'Вы собрались ударить ' + player.actions[action.payload].name);
                } else {
                    player.send('error', `Действие ${action.action} сейчас не доступно`);

                    return;
                }

                player.setAction(action.payload);

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