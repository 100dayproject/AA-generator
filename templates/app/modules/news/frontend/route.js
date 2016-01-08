"use strict";

let news = require('./controllers/news');
module.exports = function(app) {
  app.route('/news').get(news.index)
};