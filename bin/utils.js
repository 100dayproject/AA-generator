"use strict";

let fs = require('fs');
let path = require('path');
let readline = require('readline');
let mkdirp = require('mkdirp');
let chalk = require('chalk');
let self = this;

exports.loadTemplate = function (name) {
    return fs.readFileSync(path.join(__dirname, '..', 'templates/', name), 'utf-8');
};

exports.confirm = function (msg, cb) {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(msg, function (input) {
        rl.close();
        cb(/^y|yes|ok|true$/i.test(input));
    });
};

/**
 * https://gist.github.com/geedew/cf66b81b0bcdab1f334b#file-node-rm-rf-js
 * @param path
 */
exports.deleteFolderRecursive = function (path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                self.deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

// chmod 0755
exports.mkdir = function (path, fn) {
    mkdirp(path, 0x1ed, function (err) {
        if (err) throw err;
        path = path.replace(__dirname, '.');
        console.log(chalk.cyan('    create: ', path));
        fn && fn();
    });
};

exports.mk = function (dest, fn) {
    return function (path) {
        mkdirp(dest + path, 0x1ed, function (err) {
            if (err) throw err;
            console.log(chalk.cyan('    create: ', path));
            fn && fn();
        })
    }
};

// 0666
exports.write = function (path, str, mode) {
    fs.writeFileSync(path, str, {mode: mode || 0x1b6});
    console.log(chalk.cyan('    create: ', path));
};

exports.copy_template = function (source, from, to) {
    from = path.resolve(__dirname, '..', 'templates', source, from);
    self.write(to, fs.readFileSync(from, 'utf-8'));
};

exports.complete = function (appName) {
    console.log('\n  install dependencies:');
    console.log('  $ cd ', appName, ' && npm install\n');
    console.log('\n  run the app:');
    console.log('  $ SET DEBUG=', appName, ':* & npm start\n');
};