import * as express from 'express';
import * as expressWs from 'express-ws';
import {Game} from './game/game';
import {Player} from './game/units/player';

const game = new Game();

export const app = expressWs(express()).app;

let nextSessionId = 1;

export interface Session {
    player: Player;
    token: string;
    played: number;
}

const sessions: {
    [name: string]: Session;
} = {};

export function doAction(session: Session, action: any) {
    const player = session.player;

    switch (action.type) {
        case 'select_character':
        case 'ready':
            game.selectCharacter(player, action.payload);
            session.played++;

            break;
        case 'start':
            game.startCombat(player);

            if (action.payload.withBot) {
                game.addBot();
            }

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

            if (player.character.action) {
                player.send('error', 'Skill already selected');

                return;
            }

            if (player.character.actions[action.payload]
                && player.character.actions[action.payload].isAvailable()) {
                player.send('note', `You will use ${player.character.actions[action.payload].name} skill`);
            } else {
                player.send('error',
                    `Skill ${action.payload} is not available now`);

                return;
            }

            player.setAction(action.payload);

            if (!game.update(combat)) {
                player.send('note', 'Waiting for opponent...');
            }
            break;
        case 'cancel_fight':
            player.kill();
            game.endCombat(player.currentCombat);
            break;
        case 'info':
            player.send('note', `You already has played: ${session.played}`);
            player.send('note', `Played duels: ${game.combatsEnded}`);
            player.send('note', `Active duels: ${game.combatsCount - game.combatsEnded}`);
            break;
        case 'auth':
            break;
        case 'select_target':
            const unit = player.currentCombat.units[action.payload.unitId];

            if (unit.team === player.team) {
                unit.targetId = action.payload.targetId;
            }

            break;
        default:
    }
}

let id = 1;

export function extractCookies(req: express.Request): {[name: string]: string} {
    if (!req.headers.cookie) {
        return;
    }

    return (req.headers.cookie as string).split('; ')
        .reduce((result, cookie) => {
            const [key, value] = cookie.split('=');

            result[key] = value;

            return result;
        }, {} as {[name: string]: string});
}

app.ws('/ws', (ws, req) => {
    let player: Player;
    const cookies = extractCookies(req) || {};
    let sessionId = cookies.sessionId;

    if (!sessions[sessionId] || sessions[sessionId].token !== cookies.token) {
        player = game.addPlayer((id++).toString());
        sessionId = (nextSessionId++).toString();

        sessions[sessionId] = {
            player,
            token: getRandomKey(),
            played: 0
        };
    } else {
        player = sessions[sessionId].player;
    }

    player.setWS(ws);

    player.send('set_my_id', player.id);

    player.send('cookies', [
        {key: 'sessionId', value: sessionId},
        {key: 'token', value: sessions[sessionId].token}
    ]);

    ws.on('message', msg => {
        try {
            doAction(sessions[sessionId], JSON.parse(msg.toString()));
        } catch (e) {
            console.error(e);
        }
    });

    ws.on('close', () => {


        if (player.currentCombat) {
            Object.keys(player.currentCombat.units).forEach(id => {
                const playerTo = player.currentCombat.units[id];

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

function getRandomKey(): string {
    return Math.random().toString(36).substr(2, 9);
}
