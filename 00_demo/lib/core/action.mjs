import inquirer from "inquirer";
import chalk from "chalk";
import { exec } from "child_process";

const registryList = {
  npm: "https://registry.npmjs.org",
  cnpm: "http://r.cnpmjs.org",
  taobao: "https://registry.npm.taobao.org",
  nj: "https://registry.nodejitsu.com",
  npmMirror: "https://skimdb.npmjs.com/registry",
  edunpm: "http://registry.enpmjs.org",
};

const myAction = async (project, args) => {
  let choices = [];
  for (const key in registryList) {
    if (Object.hasOwnProperty.call(registryList, key)) {
      choices.push(key);
    }
  }
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "choose",
      choices,
      message: "请选择下面列表中的npm镜像地址!",
    },
  ]);
  changeR(answer.choose, registryList[answer.choose]);
};

const changeR = async (choose, registry) => {
  console.log(chalk.green(`开始切换 ${choose} 镜像地址`));
  await new Promise((resolve, reject) => {
    exec(`npm config set registry ${registry}`, (error, stdout, stderr) => {
      if (error) {
        reject(console.error(chalk.red(err)));
      }
      resolve({ stdout, stderr });
    });
  });
  console.log(chalk.green(`${choose} 镜像地址切换完成！`));
};

export default myAction;
