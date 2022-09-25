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
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37,
});

//person.save();

fruit.save();

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
