const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017";

const dbName = "newFruitsDB";

const client = new MongoClient(url, { useNewUrlParser: true });

client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function () {
    client.close();
  });
});

const insertDocuments = function (db, callback) {
  const collection = db.collection("fruits");

  collection.insertMany(
    [
      {
        name: "Apple",
        rating: 8,
        review: "Great fruit",
      },
      {
        name: "Orange",
        rating: 6,
        review: "Kinda sour",
      },
      {
        name: "Banana",
        rating: 9,
        review: "Great stuff!",
      },
    ],
    function (err, result) {
      assert.equal(err, null);
      /* assert.equal(3, result.result.n); */
      /* assert.equal(3, result.ops.length); */
      console.log("Inserted 3 documents into the collection");
      callback(result);
    }
  );
};
