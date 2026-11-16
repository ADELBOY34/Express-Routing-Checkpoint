# Node.js Exercises

Install dependencies with `npm install`, then run an exercise:

- `npm run hello` prints `HELLO WORLD`.
- `npm run server` starts the Express website at <http://localhost:3000>.
- `npm run filesystem` creates `welcome.txt` with `Hello Node` and reads `hello.txt`.
- `npm run password` prints a generated 16-character password.
- `npm run email` sends a sample message using your SMTP environment variables. Copy `.env.example` to `.env`, fill in your provider's SMTP settings, and set `EMAIL_TO` to your own address. Never commit `.env` or share an app password.

The website contains Home, Our Services, and Contact us pages. Its custom middleware allows page requests Monday to Friday from 09:00 up to (but not including) 17:00. By default, these hours use the `Africa/Algiers` time zone; set `BUSINESS_TIME_ZONE` to an IANA time zone if needed. The port defaults to 3000 and can be changed with `PORT`.

The email script does not include personal credentials. SMTP credentials are required to send a real message.
