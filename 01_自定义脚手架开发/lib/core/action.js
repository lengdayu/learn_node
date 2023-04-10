// npm install --save inquirer@^8.0.0
// 9版本以上不知require导入，需要使用esm方式应用
const inquirer = require("inquirer");
const myAction = function (project, args) {
  inquirer
    .prompt([
      //问题配置
      {
        type: "input",
        name: "username",
        message: "你的名字",
      },
      {
        type: "list",
        name: "framwork",
        choices: ["express", "koa2", "egg"],
        message: "请选择你所使用的框架",
      },
    ])
    .then((answer) => {
      console.log(answer);
    });
};
module.exports = myAction;
