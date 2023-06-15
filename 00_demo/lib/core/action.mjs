import inquirer from "inquirer";
import chalk from "chalk";
const myAction = async (project, args) => {
  console.log(chalk.green("开始配置："));
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "choose",
      choices: ["npm", "cnpm", "taobao", "nj", "npmMirror", "edunpm"],
      message: "请选择下面列表中的npm镜像地址!",
    },
  ]);
  //   npm ---- https://registry.npmjs.org/
  //   cnpm --- http://r.cnpmjs.org/
  //   taobao - https://registry.npm.taobao.org/
  //   nj ----- https://registry.nodejitsu.com/
  //   npmMirror  https://skimdb.npmjs.com/registry/
  //   edunpm - http://registry.enpmjs.org/
  switch (answer.choose) {
    case "npm":
      console.log();
      break;
    case "cnpm":
      break;
    case "taobao":
      break;
    case "nj":
      break;
    case "npmMirror":
      break;
    case "edunpm":
      break;
    case "npm":
      break;

    default:
      break;
  }
};
export default myAction;
