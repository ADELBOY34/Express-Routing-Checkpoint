const mongoose = require("mongoose");
const path = require("node:path");
const dotenv = require("dotenv");

// Load secrets from the private project .env file, which is git-ignored.
dotenv.config({ path: path.resolve(__dirname, ".env") });

// Connect using the URI supplied by the developer's local environment.
async function connectToDatabase() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("MONGO_URI is missing. Add your Atlas URI to the private .env file.");
  }

  // Modern Mongoose enables the new URL parser and unified topology by default.
  return mongoose.connect(uri);
}

// Provide a small CLI entry point for confirming a local Atlas configuration.
if (require.main === module) {
  connectToDatabase()
    .then(() => {
      console.log("Connected to MongoDB.");
      return mongoose.disconnect();
    })
    .catch((error) => {
      console.error("MongoDB connection failed:", error.message);
      process.exitCode = 1;
    });
}

module.exports = connectToDatabase;
