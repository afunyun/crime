const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

function getCurrentCronTime() {
  const now = new Date();

  const minute = now.getMinutes();
  const hour = now.getHours();
  const dayOfMonth = now.getDate();
  const month = now.getMonth() + 1;
  const dayOfWeek = now.getDay();

  return {
    minute: minute,
    hour: hour,
    dayOfMonth: dayOfMonth,
    month: month,
    dayOfWeek: dayOfWeek,
    cronString: `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`,
    readable: {
      minute: minute.toString().padStart(2, "0"),
      hour: hour.toString().padStart(2, "0"),
      dayOfMonth: dayOfMonth.toString().padStart(2, "0"),
      month: month.toString().padStart(2, "0"),
      dayOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayOfWeek],
    },
  };
}

app.get("/", (req, res) => {
  const cronTime = getCurrentCronTime();
  res.render("index", { cronTime });
});

app.get("/api/time", (req, res) => {
  const cronTime = getCurrentCronTime();
  res.json(cronTime);
});

app.listen(PORT, () => {
  console.log(`crime server is running on http://localhost:${PORT}`);
  console.log(`I'm in`);
});
