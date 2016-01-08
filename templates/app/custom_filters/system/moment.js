"use strict";

let moment = require('moment');

module.exports = function(env) {
    env.addFilter('moment', function(input, format) {
        return moment(input, format || 'DD-MM-YYYY');
    })
};