"use strict";

module.exports = function (env) {
    env.addGlobal('appName', __config.app.name);
    env.addGlobal('themeName', __config.site.theme.name);
    env.addGlobal('admin_prefix', __config.admin_prefix);
    env.addGlobal('copyright', __config.app.copyright);
    return env;
};