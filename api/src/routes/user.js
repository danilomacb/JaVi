const express = require("express");

const User = require("../models/User");

const router = express.Router();

router.post("/add", (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.save(err => {
    if (err) {
      console.error(err);
      res.status(500).json("Erro ao cadastrar, por favor tente novamente");
    } else {
      res.status(200).json("Cadastro realizado com sucesso");
    }
  });
});

module.exports = router;
