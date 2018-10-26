import * as express from 'express';
import * as expressWs from 'express-ws';
import {Game} from './game/game';
import {Player} from './game/player';

const game = new Game();

export const app = expressWs(express()).app;

export function doAction(player: Player, action: any) {
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

            player.send('note', 'You left the queue');
            break;
        case 'select_skill':
            const combat = player.currentCombat;

            try {
                if (player.action) {
                    player.send('error', 'Skill already selected');

                    return;
                }

                if (player.actions[action.payload] && player.actions[action.payload].isAvailable()) {
                    player.send('note', `You will use ${player.actions[action.payload].name} skill`);
                } else {
                    player.send('error',
                        `Skill ${action.payload} is not available now`);

                    return;
                }

                player.setAction(action.payload);

                if (combat.allReady()) {
                    combat.perform();
                    combat.showResult();

                    if (combat.isEnded) {
                        game.endCombat(combat);
                    }
                } else {
                    player.send('note', 'Waiting for opponent...');
                }
            } catch (e) {
                console.log(e);
            }
            break;
        case 'info':
            player.send('note', `Played duels: ${game.combatsEnded}`);
            player.send('note', `Active duels: ${game.combatsCount - game.combatsEnded}`);
            break;
        case 'auth':
            break;
        default:
    }
}

let id = 1;

app.ws('/ws', (ws, req) => {
    const player = game.addPlayer((id++).toString());

    player.setWS(ws);

    ws.on('message', msg => {
        try {
            doAction(player, JSON.parse(msg.toString()));
        } catch (e) {
            console.error(e);
        }
    });

    ws.on('close', () => {
        if (player.currentCombat) {
            Object.keys(player.currentCombat.players).forEach(id => {
                const playerTo = player.currentCombat.players[id];

                if (player === playerTo) {
                     return;
                }

                playerTo.send('note', 'Opponent left, you won!');
                playerTo.currentCombat = undefined;
            });

            game.endCombat(player.currentCombat);
        }
    });
});

app.use(express.static('public'));

if (process.env.MODE !== 'test') {
    app.listen('3003', () => {
        console.log('Listening...');
    });
}
