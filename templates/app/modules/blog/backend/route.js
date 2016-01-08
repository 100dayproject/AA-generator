"use strict";

let express = require('express');
let router = express.Router();
let blog = require('./controllers/blog');

router.route('/blog').get(blog.list).delete(blog.delete);
router.route('/blog/create').get(blog.create).post(blog.created);
router.route('/blog/view/:id').get(blog.view).post(blog.updated).delete(blog.delete);

module.exports = router;