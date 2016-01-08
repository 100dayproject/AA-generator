"use strict";

let numeral = require('numeral');

module.exports = function (env) {
    env.addFilter('number_format', function(num) {
        return numeral(num).format('0,0');
    });

    env.addFilter('dateFormat', function (input) {
        var t = new Date(input);
        var date = [String('00' + t.getDate()).slice(-2), String('00' + t.getMonth() + 1).slice(-2), t.getFullYear()];
        return date.join('/');
    });

    env.addFilter('timeFormat', function(input) {
        var t = new Date(input);
        var date = [String('00' + t.getDate()).slice(-2), String('00' + t.getMonth() + 1).slice(-2), t.getFullYear()];
        var time = [String('00' + t.getHours()).slice(-2),String('00' + t.getMinutes()).slice(-2),String('00' + t.getSeconds()).slice(-2)];
        return `${date.join('/')} - ${time.join(':')}`;
    })
};