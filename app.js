const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb://0.0.0.0:27017/";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db("fruitsDB");
    const foods = database.collection("fruits");
    // create an array of documents to insert
    const docs = [
      { name: "Apple", score: 8, review: "Great fruit" },
      { name: "Orange", score: 6, review: "Kinda sour" },
      { name: "Banana", score: 9, review: "Great stuff" }
    ];
    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };
    const result = await foods.insertMany(docs, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

//bottom replace run() to find all in database using node
// async function run() {
//   try {
//     const database = client.db("fruitsDB");
//     const fruits = database.collection("fruits");
//     const cursor = fruits.find();
//     if ((await fruits.countDocuments()) === 0) {
//       console.log("No documents found!");
//     }
//     await cursor.forEach(console.dir);
 
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);