const express = require("express");

const JaVi = require("./models/JaVi");
const withAuth = require("./with-auth");
const getEmail = require("./get-email");

const router = express.Router();

router.post("/new", (req, res) => {
  const { name, type, genre, episode } = req.body;
  const userEmail = getEmail(req, res);
  const javi = new JaVi({ name, type, genre, episode, userEmail });
  javi.save(err => {
    if (err) {
      console.error(err);
      res.status(500).json("Erro ao adicionar");
    } else {
      res.status(200).json("Adicionado com sucesso");
    }
  });
});

module.exports = router;
