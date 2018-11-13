const passport = require('passport');
const facebookStrategy = require('passport-facebook');
const express = require('express');
export function authRouteInit() {
    const authRoute = express();

    passport.use(new facebookStrategy({
            clientID: process.env.FB_CLIENT_ID,
            clientSecret: process.env.FB_CLIENT_SECRET,
            callbackURL: "http://localhost:3003/auth/facebook/callback"
        },
        (accessToken: string, refreshToken: string, profile: any, cb: () => void) => {
            // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
            //     return cb(err, user);
            // });
            return cb();
        }
    ));

    authRoute.get('/facebook', passport.authenticate('facebook'));

    authRoute.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }),
        (req: any, res: any) => {
            res.redirect('/');
        });

    return authRoute;
}