"use strict";

let should = require('should');
let assert = require('assert');

let __ = require('../../templates/libs/global_function');
let path = require('path');
let test = require('../utils').test;

let srcPath = path.resolve(__dirname,'..', '..', 'templates', 'config');
let ignore = ['env', 'strategies', 'express'];

let re = __.getDirectories(srcPath, ignore);


describe('globalFunction', function() {
    describe('#getDirectories', function() {
        it('testing for return array length', function(done) {
            assert.equal(re.length, 4);
            done();
        });
    })
});