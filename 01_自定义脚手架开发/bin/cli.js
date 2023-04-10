#! /usr/bin/env node
const { program } = require("commander");
const myHelp = require("../lib/core/help.js");
myHelp(program);

const myCommander = require("../lib/core/mycommander.js");
myCommander(program);

program.parse(process.argv);
