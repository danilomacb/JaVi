const express = require("express");

const JaVi = require("./models/JaVi");
const withAuth = require("./with-auth");

const router = express.Router();

router.post("/new", (req, res) => {
  const { name, type, genre, episodes, userEmail } = req.body;
  const javi = new JaVi({ name, type, genre, episodes, userEmail });
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
