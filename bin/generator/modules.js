"use strict";

let layer = require("../../templates/config/app").appLayer;
let mkdir = require("../utils").mkdir;
let write = require("../utils").write;
let loadTemplate = require("../utils").loadTemplate;
let rm_rf = require("../utils").deleteFolderRecursive;

/**
 * Module generator [Controllers, Router, Views and Models]
 * @param path [String] - Path destination generator
 * @param moduleName - Module name
 */

function install(path, moduleName) {
    mkdir(path, function () {
        mkdir(path + '/' + moduleName);
        for (let i in Object.keys(layer)) {

            //* Create directory */
            mkdir([path, moduleName, Object.keys(layer)[i]].join('/'));
            mkdir([path, moduleName, Object.keys(layer)[i], 'controllers'].join('/'));
            mkdir([path, moduleName, 'models'].join('/'));
            mkdir([path, moduleName, Object.keys(layer)[i], layer[Object.keys(layer)[i]]['pathView']].join('/'));

            /** Write template controllers */
            write([path, moduleName, Object.keys(layer)[i], 'controllers', moduleName + '.js'].join('/'), temp(Object.keys(layer)[i], moduleName).controllers);

            /** Write template routers */
            write([path, moduleName, Object.keys(layer)[i], 'route.js'].join('/'), temp(Object.keys(layer)[i], moduleName).routers);

            /** Write views template */
            write([path, moduleName, Object.keys(layer)[i], 'views/index.html'].join('/'), temp(Object.keys(layer)[i], moduleName).views);

            /** Write models template */
            write([path, moduleName, 'models', moduleName + '.js'].join('/'), temp(Object.keys(layer)[i], moduleName).SequelizeModels);
            write([path, moduleName, 'models/mongo_' + moduleName + '.js'].join('/'), temp(Object.keys(layer)[i], moduleName).MongoModels);

            /** Write module.js for module information */
            write([path, moduleName, 'module.js'].join('/'), temp(Object.keys(layer)[i], moduleName).Module);
        }
    });
}

function uninstall(moduleName) {
    let exec = require('child_process').exec;
    let os = require('os').platform();
    if (os === 'win32') {
        exec('rmdir /s /q ' + moduleName, function (err, out) {
            if (err) return err.code;
            return 0;
        })
    } else {
        exec('rm -rf ' + moduleName, function (err, out) {
            console.log(out);
            err && console.log(err);
        });
    }

    //rm_rf(moduleName);
}

/**
 * Load module templates
 * @param layer
 * @param moduleName
 * @returns {{controllers: (*|string|XML|void), routers: (*|string|XML|void), views, SequelizeModels: (*|string|XML|void), MongoModels: (*|string|XML|void), Module: (string|XML)}}
 */
let temp = function (layer, moduleName) {

    let controllers = loadTemplate('app/modules/home/' + layer + '/controllers/home.js').replace(/home/g, moduleName);
    let routers = loadTemplate('app/modules/home/' + layer + '/route.js').replace(/home/g, moduleName);
    let views = loadTemplate('app/modules/home/' + layer + '/views/index.html');

    let SequelizeModels = loadTemplate('app/modules/home/models/home.js').replace(/home/g, moduleName);
    let MongoModels = loadTemplate('app/modules/home/models/mongo_home.js').replace(/home/g, moduleName);

    let Module = loadTemplate('app/modules/home/module.js')
        .replace(/Home/g, moduleName.charAt(0).toUpperCase() + moduleName.substr(1))
        .replace(/Hai/g, require('os').hostname());

    return {controllers, routers, views, SequelizeModels, MongoModels, Module};
};

module.exports = {
    install,
    uninstall
};