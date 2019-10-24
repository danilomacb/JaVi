const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const withAuth = require("./middleware");
const user = require("./user");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/user", user);

const mongo_uri = "mongodb://localhost:27017/javi";
const port = 3001;

mongoose.connect(
  mongo_uri,
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

app.listen(port, () => {
  console.log("listening on port " + port);
});
