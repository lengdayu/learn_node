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
