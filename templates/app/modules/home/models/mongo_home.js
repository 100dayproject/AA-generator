"use strict";

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var homeSchema = new Schema({
    about: {type: String}
});

module.exports = mongoose.model('homes', homeSchema);
