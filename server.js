const express = require("express");
const path = require("node:path");

const app = express();
const port = Number(process.env.PORT) || 3000;
const businessTimeZone = process.env.BUSINESS_TIME_ZONE || "Africa/Algiers";

function isWithinWorkingHours(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: businessTimeZone,
    weekday: "short",
    hour: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const isWeekday = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(values.weekday);
  const hour = Number(values.hour);
  return isWeekday && hour >= 9 && hour < 17;
}

function workingHoursMiddleware(_request, response, next) {
  if (isWithinWorkingHours()) {
    return next();
  }

  return response
    .status(403)
    .send("This website is available Monday to Friday, 09:00–17:00.");
}

app.use(express.static(path.join(__dirname, "public")));
app.use(["/", "/services", "/contact"], workingHoursMiddleware);

app.get("/", (_request, response) => {
  response.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/services", (_request, response) => {
  response.sendFile(path.join(__dirname, "views", "services.html"));
});

app.get("/contact", (_request, response) => {
  response.sendFile(path.join(__dirname, "views", "contact.html"));
});

app.use((_request, response) => {
  response.status(404).send("Page not found.");
});

app.listen(port, () => {
  console.log(`Website listening at http://localhost:${port}`);
  console.log(`Working hours use the ${businessTimeZone} time zone.`);
});
