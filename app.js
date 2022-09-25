const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  score: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Plum",
  score: 10,
  review: "Plum crazy.",
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
  name: "Mango",
  score: 6,
  review: "Great flavour, seed kinda big.",
});

//mango.save();

/* const person = new Person({
  name: "Amy",
  age: 42,
  favoriteFruit: pineapple,
}); */

//person.save();

//fruit.save();

/* const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best fruit!",
});
const orange = new Fruit({
  name: "Orange",
  score: 4,
  review: "Too sour for me.",
});
const banana = new Fruit({
  name: "Banana",
  score: 3,
  review: "Weird texture.",
}); */

/* Fruit.insertMany([kiwi, orange, banana], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully saved all fruits to fruitsDB");
  }
}); */

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();

    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});

Person.updateOne(
  { _id: "63309729ed6daccc4e358ae6" },
  { favoriteFruit: mango },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully updated");
    }
  }
);

/* Fruit.deleteOne({ _id: "6330b4903cb719b52e02d55a" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Success");
  }
}); */

/* Person.deleteMany({ name: "John" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully all of the records");
  }
}); */
