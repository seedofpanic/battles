import * as express from 'express';
import * as expressWs from 'express-ws';
import {Game} from './game/game';
import {Player} from './game/units/player';
import {authRouteInit} from './router/authRoute';
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');
import cookieSession = require('cookie-session');
import {updateUser} from './bdTypes/DBUser';
import {connectToDb} from './db';
const passport = require('passport');

require('dotenv').config();

export const app = expressWs(express()).app;

export const players: {
    [name: string]: Player;
} = {};

app.use(cookieParser());
app.use(bodyParser());
app.use(cookieSession({
    name: 'session',
    keys: [process.env.SESSION_KEY],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRouteInit());

export function doAction(player: Player, action: any) {

    switch (action.type) {
        case 'get_character_list':
            Game.showCharacters(player);
            break;
        case 'select_character':
        case 'ready':
            if (Game.playerSelectCharacter(player, action.payload)) {
                player.send('character_selected', player.characterId);
            }

            break;
        case 'start':
            if (!player.characterId) {
                return;
            }

            Game.startCombat(player);

            if (action.payload.withBot) {
                Game.addBot();
            }

            if (player.character.combat.isFull()) {
                Game.removeCombatFromQueue(player.character.combat);
                player.character.combat.start();
            }

            break;
        case 'invite':
            Game.startDuel(player, null);
            break;
        case 'join':
            Game.startDuel(player, action.combatId || null);
            break;
        case 'stop':
            player.leaveCombat();

            player.send('note', 'You left the queue');
            break;
        case 'select_skill':
            Game.setAction(player, action.payload);
            break;
        case 'leave_fight':
        case 'cancel_fight':
            Game.leaveCombat(player);
            break;
        case 'info':
            player.send('note', `You already has played: ${player.played}`);
            player.send('note', `Played duels: ${Game.combatsEnded}`);
            player.send('note', `Active duels: ${Game.combatsCount - Game.combatsEnded}`);

            for (let i = 4; i > -1; i--) {
                if (!Game.topWinRate[i]) {
                    continue;
                }

                player.send('note', `${Game.topWinRate[i].id}: ${Game.topWinRate[i].rate.toFixed(2)}`);
            }
            player.send('note', `Top win rate:`);
            break;
        case 'auth':
            break;
        case 'select_target':
            const character = player.character.combat.characters[action.payload.unitId];

            character.targetId = action.payload.targetId;

            break;
        default:
    }
}

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

    if (!players[req.session.playerId]) {
        ws.close(1, 'Not authorized');

        return;
    }

    player = players[req.session.playerId];

    player.setWS(ws);

    player.send('set_my_id', player.id);

    ws.on('message', msg => {
        try {
            doAction(player, JSON.parse(msg.toString()));
        } catch (e) {
            console.error(e);
        }
    });

    ws.on('close', () => {
        if (player.character) {
            player.leaveCombat();
        }

        if (req.user) {
            updateUser(req.user._id, player.getUserData());
        }
    });
});

app.use(express.static('public'));

if (process.env.MODE !== 'test') {
    connectToDb()
        .then(() => Game.init())
        .then(() => {
            app.listen('3003', () => {
                console.log('Listening...');
            });
        })
        .catch(err => {
            console.log(err);
        });
}

function getRandomKey(): string {
    return Math.random().toString(36).substr(2, 9);
}
