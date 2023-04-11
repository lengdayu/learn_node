// npm install --save inquirer@^8.0.0
// 9版本以上不知require导入，需要使用esm方式应用
var inquirer = require("inquirer");
var config = require("../../config");
var downloadFun = require("./download");
const myAction = async (project, args) => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "framwork",
      choices: config.framwork,
      message: "请选择你所使用的框架",
    },
  ]);
  // 下载代码模板
  downloadFun(config.foramworkUrl[answer.framwork], project);
};
module.exports = myAction;
