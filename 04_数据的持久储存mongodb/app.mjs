import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db("mytest");
  const cc = db.collection("cc");
  let d = cc.find();
  console.log(await d.toArray());
}

main().then(console.log).catch(console.error);
//   .finally(() => client.close());
