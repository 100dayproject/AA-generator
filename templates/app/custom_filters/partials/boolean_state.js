"use strict";

module.exports = function(env) {
    let safe = env.getFilter('safe');
    env.addFilter('post_state', function(boolean) {
        if (boolean) {
            return safe("<span class='label label-success'>Publish</span>")
        } else {
            return safe("<span class='label label-warning'>Draft</span>")
        }
    })
};