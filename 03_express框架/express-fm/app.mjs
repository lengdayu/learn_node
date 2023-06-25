import express, { json } from "express";
import fs from "fs/promises";
import json5 from "json5";

const app = express();
//解析post中不同类型的数据
app.use(express.urlencoded()); //x-www-form-urlencoded
app.use(express.json()); //json

app.get("/", async (req, res) => {
  try {
    const data = await fs.readFile("./db.json5", { encoding: "utf-8" });
    res.send(json5.parse(data).users);
  } catch (error) {
    res.status(500).json({ error });
  }
});
app.post("/add", async (req, res) => {
  console.log(req.headers);
  console.log(req.body);
  let body = req.body;
  if (!body) {
    res.status(403).json({
      error: "缺少用户信息",
    });
  } else {
    let db = await fs.readFile("./db.json5", { encoding: "utf-8" });
    const jsonObj = json5.parse(db);
    body.id = jsonObj.users[jsonObj.users.length - 1].id + 1;
    jsonObj.users.push(body);
    await fs.writeFile("./db.json5", json5.stringify(jsonObj));
    res.send("写入成功");
  }
});
app.listen(9090, () => {
  console.log("serve running in 5000");
});
