"use strict";

let _module = new __viewRender('backend', 'dashboard'),
    Promise = require('bluebird');

_module.index = function (req, res) {

    //** Make a controllers here */
    Promise.all([
        __models.Question.find().count(function (err, re) {
            if (err) __.logger(err, 'backend');
            return re;
        }),
        __models.Answer.find().count(function (err, re) {
            if (err) __.logger(err, 'backend');
            return re;
        }),
        __models.User.find().count(function (err, re) {
            if (err) __.logger(err, 'backend');
            return re;
        }),
        __models.Doctor.find().count(function (err, re) {
            if (err) __.logger(err, 'backend');
            return re;
        })
    ]).then(function (allCount) {
        _module.render(req, res, 'index', {
            title: 'Administrator home page',
            pageTitle: 'Dashboard',
            count: allCount
        })
    });


};

module.exports = _module;