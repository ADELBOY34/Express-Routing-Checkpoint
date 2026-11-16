const Person = require("./models/person");

// Create one person, save it, and return the result through a Node-style callback.
function createAndSavePerson(done) {
  const person = new Person({
    name: "Alex Example",
    age: 30,
    favoriteFoods: ["burritos", "pasta"],
  });
  person.save().then((data) => done(null, data), done);
}

// Create all supplied people and return the saved documents through the callback.
function createManyPeople(arrayOfPeople, done) {
  Person.create(arrayOfPeople).then((data) => done(null, data), done);
}

// Find every person whose name matches the supplied search value.
function findPeopleByName(personName, done) {
  Person.find({ name: personName }).then((data) => done(null, data), done);
}

// Find one person who has the supplied food in their favorites.
function findOneByFood(food, done) {
  Person.findOne({ favoriteFoods: food }).then((data) => done(null, data), done);
}

// Find a person by MongoDB's document identifier.
function findPersonById(personId, done) {
  Person.findById(personId).then((data) => done(null, data), done);
}

// Load a person, add a favorite food, then save and return the updated document.
function addFavoriteFood(personId, done) {
  Person.findById(personId)
    .then((person) => {
      if (!person) return done(null, null);
      person.favoriteFoods.push("hamburger");
      return person.save().then((savedPerson) => done(null, savedPerson));
    })
    .catch(done);
}

// Find a person by name and return their updated document after setting age to 20.
function updatePersonAge(personName, done) {
  Person.findOneAndUpdate(
    { name: personName },
    { $set: { age: 20 } },
    { new: true },
  ).then((data) => done(null, data), done);
}

// Delete and return one person by id; findByIdAndDelete replaces the removed alias.
function removePersonById(personId, done) {
  Person.findByIdAndDelete(personId).then((data) => done(null, data), done);
}

// Delete all people named Mary and pass the deletion result to the callback.
function removeMary(done) {
  Person.deleteMany({ name: "Mary" }).then((result) => done(null, result), done);
}

// Find burrito fans, sort by name, limit to two, and omit age from the results.
function queryChain(done) {
  Person.find({ favoriteFoods: "burritos" })
    .sort({ name: 1 })
    .limit(2)
    .select("-age")
    .exec().then((data) => done(null, data), done);
}

module.exports = {
  createAndSavePerson,
  createManyPeople,
  findPeopleByName,
  findOneByFood,
  findPersonById,
  addFavoriteFood,
  updatePersonAge,
  removePersonById,
  removeMary,
  queryChain,
};
