import fs from "fs/promises";
import url from "url";
import querystring from "querystring";
export const router = async (req, res) => {
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
};
