### Getting started

> This open source hasOwn by [100dayproject.](http://100dayproject.org)

![App information screenshot](https://camo.githubusercontent.com/f6b6f437e59dc633e07e79923f3b94f27e104e24/687474703a2f2f626574612e75646f63746f722e766e2f75646f63746f722f696d672f696e666f2e706e67)

### What the project?

> Life-parser (currently v1.0 previous beta version) has easy helper coding Nodejs for build website application.

[Life parser'](http://100dayproject.org/projects/life-parser) application generator code structure and function helper already.

### Installation

> Currently v1.0 not publish on npm but will be quickly to complete.

### Quick start

Create the app:

```bash
$ life-parser [App name]
```

Install dependencies:

```bash
$ npm install
```

Rock and Roll

```bash
$ npm start
```

### Command Line Options

This generator can also be further configured with the following command line flags.

```sh
-h, --help     output usage information
-V, --version  output the version number
-m, --module   add module
-t, --theme    add theme
-f, --filter   add filter for nunjucks template engines
-i, --info     view information
-c, --config   view configuration
-s, --support  view support information
-v, --version  view version generator
```

### Examples

This generator theme for project, you following command line for example.

Show themes list

```sh
$ life-parser -t
```

Show theme information

```sh
$ life-parser -t <Your Theme Name>
```

Install theme

```sh
$ life-parser install -t <Your Theme Name> [--force]
```

Uninstall theme

```sh
$ life-parser uninstall -t <Your Theme Name>
```

[![Dependency Status](https://david-dm.org/100dayproject/AA-generator.svg?style=flat-square)](https://david-dm.org/100dayproject/AA-generator)
[![devDependency Status](https://david-dm.org/100dayproject/AA-generator/dev-status.svg)](https://david-dm.org/100dayproject/AA-generator#info=devDependencies)
