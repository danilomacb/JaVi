require("dotenv").config({ path: __dirname + "/../.env" });

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const withAuth = require("./with-auth");
const user = require("./user");
const javi = require("./javi");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/user", user);
app.use("/javi", javi);

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

app.get("/secret", withAuth, (req, res) => {
  res.send("The password is potato");
});

app.listen(process.env.API_PORT, () => {
  console.log("listening on port " + process.env.API_PORT);
});
