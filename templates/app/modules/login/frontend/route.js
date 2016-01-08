"use strict";

let blog = require('./controllers/blog'),
    passport = require('passport');

module.exports = function (app) {
    app.route('/auth/facebook').get(passport.authenticate('facebook', {scope: 'email'}));
    app.route('/auth/facebook/callback').get(passport.authenticate('facebook', {
        failureRedirect: `/`,
        successRedirect: `/news`
    }))
};