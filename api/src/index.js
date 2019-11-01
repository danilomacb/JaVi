require("dotenv").config({ path: __dirname + "/../.env" });

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const user = require("./user");
const watched = require("./watched");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/user", user);
app.use("/watched", watched);

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
