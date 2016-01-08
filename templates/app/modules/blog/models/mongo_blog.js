"use strict";

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var blogSchema = new Schema({
    about: {type: String}
});

module.exports = mongoose.model('blogs', blogSchema);
