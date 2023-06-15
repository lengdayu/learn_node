import myAction from "./action.mjs";

const myCommander = function (program) {
  program
    //command 参数1代表指令 参数2代表参数 参数3代表其他所有的参数的数组
    .command("changeRegistry")
    //alias 代表指令别名， 就像--help 的别名 -h
    .alias("cRegistry")
    //description代表问题描述
    .description("切换你需要的npm源镜像地址")
    //action代指操作，后续的执行的逻辑都在这里
    .action(myAction);
};

export default myCommander;
