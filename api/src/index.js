const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

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

const secret = "mysecretsshhh";

app.post("/api/authenticate", function(req, res) {
  const { email, password } = req.body;
  User.findOne({ email }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: "Internal error please try again"
      });
    } else if (!user) {
      res.status(401).json({
        error: "Incorrect email or password"
      });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500).json({
            error: "Internal error please try again"
          });
        } else if (!same) {
          res.status(401).json({
            error: "Incorrect email or password"
          });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: "1h"
          });
          res.cookie("token", token, { httpOnly: true }).sendStatus(200);
        }
      });
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
