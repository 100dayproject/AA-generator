"use strict";

let moduleName = 'news',
    _module = new __viewRender('frontend', moduleName),
    Promise = require('bluebird');

_module.index = function(req, res) {
  _module.render(req, res, 'index', {
      title: 'Tin tức'
  })
};

module.exports = _module;