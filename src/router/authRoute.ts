const passport = require('passport');
const facebookStrategy = require('passport-facebook');
const express = require('express');
export function authRouteInit() {
    const authRoute = express();

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    passport.use(new facebookStrategy({
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

    authRoute.get('/error', (req, res) => {
        res.send('ok');
    });

    authRoute.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    return authRoute;
}
