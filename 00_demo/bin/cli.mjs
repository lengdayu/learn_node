#! /usr/bin/env node
import { Command } from "commander";
const program = new Command();
import help from "../lib/core/help.js";
help(program);

import myCommander from "../lib/core/commander.mjs";
myCommander(program);

program.parse(process.argv);
