import * as express from 'express';
import * as passport from 'passport';
import {Strategy as FacebookStrategy} from 'passport-facebook';

export function authRouteInit() {
    const authRoute = express();

    passport.serializeUser((user: any, done: any) => {
        done(null, user);
    });

    passport.deserializeUser((user: any, done: any) => {
        done(null, user);
    });

    passport.use(new FacebookStrategy({
            clientID: process.env.FB_CLIENT_ID,
            clientSecret: process.env.FB_CLIENT_SECRET,
            callbackURL: `http://${process.env.HOST}/auth/facebook/callback`,
        },
        (accessToken: string, refreshToken: string, profile: any, cb: (err: any, user: any) => void) => {
            // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
            //     return cb(err, user);
            // });
            return cb(null, { id: 'fb_' + profile.id });
        }
    ));

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
        res.redirect('/');
    });

    return authRoute;
}
