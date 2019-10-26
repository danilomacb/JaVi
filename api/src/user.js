const express = require("express");
const jwt = require("jsonwebtoken");

const User = require("./models/User");
const withAuth = require("./middleware");

const router = express.Router();

router.post("/register", (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.save(err => {
    if (err) {
      console.error(err);
      res.status(500).send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

router.post("/authenticate", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json("Erro interno, por favor tente novamente");
    } else if (!user) {
      res.status(401).json("Email ou senha incorretos");
    } else {
      user.isCorrectPassword(password, (err, same) => {
        if (err) {
          console.error(err);
          res.status(500).json("Erro interno, por favor tente novamente");
        } else if (!same) {
          res.status(401).json("Email ou senha incorretos");
        } else {
          const payload = { email };
          const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1h"
          });
          res
            .cookie("token", token, { httpOnly: true })
            .status(200)
            .json("Seja Bem Vindo!");
        }
      });
    }
  });
});

router.get("/checkToken", withAuth, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
