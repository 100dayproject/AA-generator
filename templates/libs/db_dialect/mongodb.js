"use strict";

let mongoose = require('mongoose');
let db = {};

let mongoUri = __config.db.dialect + '://' + __config.db.host + ':' + __config.db.port + ',' + __config.db.secondary + ':' + __config.db.port + '/' + __config.db.database;

var options = {
    db: {native_parser: true},
    server: {
        socketOptions: {keepAlive: 1},
        poolSize: 5
    },
    auth: {
        authdb: 'admin'
    },
    replset: {
        rs_name: "uDoctor",
        socketOptions: {keepAlive: 1}
    },
    user: __config.db.username,
    pass: __config.db.password
};

mongoose.connect(mongoUri, options);
mongoose.connection.on('error', function (err) {
    if (err) throw err;
});

mongoose.set('debug', __config.db.logging);

__.getGlobbedFiles(__base + 'app/modules/CollectionModels/mongo_*.js').forEach(function (modelPath) {
    let model = require(modelPath);
    db[model.modelName] = model;
    //db[model.modelName].createTable = __.createTable;
});

__.logger.info(`[Success] Load all the models.\n`);

module.exports = db;