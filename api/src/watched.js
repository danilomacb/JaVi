const express = require("express");

const Watched = require("./models/Watched");
const withAuth = require("./with-auth");
const getEmail = require("./get-email");

const router = express.Router();

router.post("/add", (req, res) => {
  const { name, type, genre, episode } = req.body;
  const userEmail = getEmail(req, res);
  const watched = new Watched({ name, type, genre, episode, userEmail });
  watched.save(err => {
    if (err) {
      console.error(err);
      res.status(500).json("Erro ao adicionar");
    } else {
      res.status(200).json("Adicionado com sucesso");
    }
  });
});

router.get("/get/:id", async (req, res) => {
  const id = req.params.id;
  const watched = await Watched.findById(id);
  res.status(200).json(watched);
});

router.get("/get-all", async (req, res) => {
  const userEmail = getEmail(req, res);
  const watcheds = await Watched.find({ userEmail });
  res.status(200).json(watcheds);
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await Watched.findByIdAndDelete(id);
  res.status(200).send();
});

module.exports = router;
