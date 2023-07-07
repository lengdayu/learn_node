const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// 加一个注释，用以说明，本项目代码可以任意定制更改
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;

const router = require("./router/index");

app.use("/user", router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
