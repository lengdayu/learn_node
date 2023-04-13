#! /usr/bin/env node
const { Command } = require("commander");
const program = new Command();
const myHelp = require("../lib/core/help.js");
myHelp(program);

program.parse(process.argv);
