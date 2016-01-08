"use strict";

let redisClient = require('redis').createClient(__config.redis);
let acl = require('acl');
let passport = require('passport'),
    loginModule = new __viewRender('backend', 'login');

module.exports = function (app) {

    acl = new acl(new acl.redisBackend(redisClient, __config.redis.acl_prefix));


    app.route(`/${__config.admin_prefix}/login`).get(function (req, res) {
        loginModule.render(req, res, 'login')
    }).post(passport.authenticate('adminLogin', {
        failureRedirect: `/${__config.admin_prefix}/login`,
        failureFlash: 'Tài khoản hoặc mật khẩu không đúng!',
        successRedirect: `/${__config.admin_prefix}/dashboard`
    }));

    app.route(`/${__config.admin_prefix}/logout`).get(function (req, res) {
        req.logout();
        req.session.destroy();
        res.redirect(`/${__config.admin_prefix}/login`);
    });

    app.get('*', function (req, res, next) {
        res.locals.user = req.user || null;
        next();
    });

    app.use(`/${__config.admin_prefix}*`, function (req, res, next) {
        if (!req.isAuthenticated() || !req.user) {
            return res.redirect(`/${__config.admin_prefix}/login`);
        }
        next();
    })
};
