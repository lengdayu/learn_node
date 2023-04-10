const myAction = require("./action.js");

const myCommander = function (program) {
  program
    //command 参数1代表指令 参数2代表参数 参数3代表其他所有的参数的数组
    .command("create <project> [other...]")
    //alias 代表指令别名， 就像--help 的别名 -h
    .alias("crt")
    //description代表问题描述
    .description("创建项目")
    //action代指操作，后续的执行的逻辑都在这里
    .action(myAction);
};

module.exports = myCommander;
