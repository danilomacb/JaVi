const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const User = require("./User");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongo_uri = "mongodb://localhost:27017/auth";
const port = 3001;

mongoose.connect(mongo_uri, function(err) {
  console.log(`Successfully connected to ${mongo_uri}`);
});

app.get("/api/home", function(req, res) {
  res.send("Welcome!");
});

app.get("/api/secret", function(req, res) {
  res.send("The password is potato");
});

app.post("/api/register", function(req, res) {
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.save(function(err) {
    if (err) {
      res.status(500).send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
