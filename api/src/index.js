require("dotenv").config({ path: __dirname + "/../.env" });

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const auth = require("./routes/auth");
const user = require("./routes/user");
const watched = require("./routes/watched");
const toWatch = require("./routes/toWatch");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/auth", auth);
app.use("/user", user);
app.use("/watched", watched);
app.use("/to-watch", toWatch);

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  err => {
    if (err) {
      console.error(err);
    }
  }
);

app.listen(process.env.API_PORT, () => {
  console.log("listening on port " + process.env.API_PORT);
});
