import * as express from 'express';
import * as passport from 'passport';
import {Strategy as FacebookStrategy} from 'passport-facebook';
import {createUser, getUser, getUserById} from '../bdTypes/DBUser';
import {players} from '../index';
import {Player} from '../game/units/player';

let newId = 1;

export function authRouteInit() {
    const authRoute = express();

    passport.serializeUser((user: any, done: any) => {
        done(null, {_id: user._id});
    });

    passport.deserializeUser((user: any, done: any) => {
        getUserById(user._id)
            .then(user => {
                done(null, user);
            });
    });

    passport.use(new FacebookStrategy({
            clientID: process.env.FB_CLIENT_ID,
            clientSecret: process.env.FB_CLIENT_SECRET,
            callbackURL: `http://${process.env.HOST}/auth/facebook/callback`,
            passReqToCallback: true
        }, (req: express.Request, accessToken: string, refreshToken: string, profile: any,
            cb: (err: any, user: any) => void) => {
                const id = 'fb_' + profile.id;
                const player = players[req.session.playerId];

                getUser({id})
                    .catch(err => {
                        console.log('err: ' + err);
                        return null;
                    })
                    .then(user => {
                        if (!user) {
                            return createUser(player);
                        }

                        return user;
                    })
                    .then(user => {
                        player.updateFromUser(user);
                        cb(null, user);
                    });
            }
    ));


    authRoute.get('/', (req, res) => {
        if (!players[req.session.playerId]) {
            const id = newId++;

            players[id] = new Player((id).toString(), req.user);
            req.session.playerId = id;
            req.session.save(() => {});
        }


        res.send({auth: !!req.user});
    });

    authRoute.get('/facebook', passport.authenticate('facebook'));

    authRoute.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/auth/error' }),
        (req: any, res: any) => {
            res.redirect('/');
        });

    authRoute.get('/error', (req: any, res: express.Response) => {
        res.send('ok');
    });

    authRoute.get('/logout', (req: express.Request, res: express.Response) => {
        req.logout();
        delete req.session.playerId;
        req.session.save(() => {});
        res.redirect('/');
    });

    return authRoute;
}
