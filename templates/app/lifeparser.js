"use strict";

require("../config/init")();
global.__ = require("../libs/global_function");
global.__config = require("../config");
global.__models = require("../libs/models_manager");
global.__viewRender = require("../libs/render_manager");

/**
 * lifeparser main application
 */
class lifeparser {

    /**
     * Running application.
     * @param port [Int] - Port express listen
     * @param opt [Boolean] - Application show configuration
     */
    start(port, opt) {
        let app = require("../config/express")();
        let PORT = process.env.PORT || port || __config.site.port;
        app.listen(PORT);
        if (opt && opt.showConfigure) {
            __.logger.info(`Application config information:
            => Template engine: ${__config.site.templateEngine}
            => Model database: ${__config.db.dialect}
            => Theme current: ${__config.site.theme.name}\n`);

            __.logger.info(`=> Listening on port ${PORT}. Process ID: ${process.pid}`);
        }
    }
}

module.exports = lifeparser;