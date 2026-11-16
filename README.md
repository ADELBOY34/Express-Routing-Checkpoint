# Node.js Exercises

Install dependencies with `npm install`, then run an exercise:

- `npm run hello` prints `HELLO WORLD`.
- `npm run server` starts the Express website at <http://localhost:3000>.
- `npm run filesystem` creates `welcome.txt` with `Hello Node` and reads `hello.txt`.
- `npm run password` prints a generated 16-character password.
- `npm run email` sends a sample message using your SMTP environment variables. Copy `.env.example` to `.env`, fill in your provider's SMTP settings, and set `EMAIL_TO` to your own address. Never commit `.env` or share an app password.
- `npm run db:connect` connects to MongoDB Atlas using `MONGO_URI` from `.env`.

## Mongoose checkpoint

Set `MONGO_URI` in the private `.env` file before connecting. Copy the example URI from `.env.example` and replace its placeholder credentials and cluster/database names. `.env` is ignored by Git.

The `Person` model in `models/person.js` has a required `name`, numeric `age`, and string-array `favoriteFoods`. `person-operations.js` exports callback-based exercises for saving one or many people, searching, updating, deleting, and chaining query helpers. Callbacks are preserved for the checkpoint while database operations use current Mongoose promises internally.

Run `npm run db:connect` after adding a valid URI. No Atlas URI or credentials are included in this project. The connection uses modern Mongoose defaults; the old `useNewUrlParser` and `useUnifiedTopology` options are enabled by default and are no longer needed.

The website contains Home, Our Services, and Contact us pages. Its custom middleware allows page requests Monday to Friday from 09:00 up to (but not including) 17:00. By default, these hours use the `Africa/Algiers` time zone; set `BUSINESS_TIME_ZONE` to an IANA time zone if needed. The port defaults to 3000 and can be changed with `PORT`.

The email script does not include personal credentials. SMTP credentials are required to send a real message.
