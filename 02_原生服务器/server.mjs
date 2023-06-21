//1.导入http模块
import http from "http";
import { router } from "./router.mjs";

//2.创建服务器
// 获取到服务器的实例对象
const app = http.createServer();
app.listen(9090, () => {
  console.log("run http://127.0.0.1:9090");
});

//3.监听请求事件
app.on("request", router);
