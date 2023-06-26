# Express

## 一、项目构建

- 创建指令 `npn init -y` 、`npm i express - D`

- express提供了示例工程，可以通过`npx express-generator`指令来完成创建

## 二、基本使用

```js
import express from "express";
import fs from "fs/promises";
import json5 from "json5";

const app = express();

app.get("/", async (req, res) => {
  try {
    const data = await fs.readFile("./db.json5", { encoding: "utf-8" });
    res.send(json5.parse(data).users);
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(5000, () => {
  console.log("serve running in 5000");
});
0");
});  
```
