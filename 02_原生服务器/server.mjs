//1.导入http模块
import http from "http";
import fs from "fs/promises";
import url from "url";
import querystring from "querystring";

//2.创建服务器
// 获取到服务器的实例对象
const app = http.createServer();
app.listen(9090, () => {
  console.log("run http://127.0.0.1:9090");
});

//3.监听请求事件
app.on("request", async (req, res) => {
  if (req.method === "GET") {
    console.log(url.parse(req.url, true).query.id);
    const result = await fs.readFile("./index.html", "utf-8");
    res.write(result);
  } else if (req.method === "POST") {
    // do somethings
    let result = "";
    req.on("data", (data) => {
      result += data;
    });
    req.on("end", () => {
      //querystring解析chunk流
      console.log(querystring.parse(result));
    });
  }
  res.end();
});
