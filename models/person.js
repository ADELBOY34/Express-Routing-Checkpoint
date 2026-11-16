const mongoose = require("mongoose");

// Define the fields and basic validation for each person document.
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

// Reuse the model if this file is loaded more than once.
const Person = mongoose.models.Person || mongoose.model("Person", personSchema);

module.exports = Person;
