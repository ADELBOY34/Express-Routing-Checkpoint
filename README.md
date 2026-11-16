# Mongoose Checkpoint

Install dependencies with `npm install`. Put your MongoDB Atlas URI in a private `.env` file as `MONGO_URI="your-uri"`; never commit `.env`. Copy `.env.example` as a template and replace its placeholder values.

`models/person.js` defines the required name, age, and favorite foods fields. `person-operations.js` contains callback-based examples for create, search, update, delete, and chained queries. `database.js` loads the URI and connects to MongoDB when you run `npm run db:connect`.

The operations retain the checkpoint's `done(err, data)` callbacks while using modern Mongoose methods. The old `useNewUrlParser` and `useUnifiedTopology` options are defaults in current Mongoose. `deleteMany()` and `findByIdAndDelete()` replace APIs removed from newer releases.
