const express = require("express");

const Watched = require("../models/Watched");
const withAuth = require("../utils/with-auth");
const getEmail = require("../utils/get-email");

const router = express.Router();

router.post("/add", withAuth, (req, res) => {
  const watchedItem = req.body;
  watchedItem.userEmail = getEmail(req, res);
  const watched = new Watched(watchedItem);
  watched.save(err => {
    if (err) {
      console.error(err);
      res.status(500).json("Erro ao adicionar");
    } else {
      res.status(200).json("Adicionado com sucesso");
    }
  });
});

router.get("/get/:id", withAuth, async (req, res) => {
  const id = req.params.id;
  const watched = await Watched.findById(id);
  res.status(200).json(watched);
});

router.get("/get-all", withAuth, async (req, res) => {
  const userEmail = getEmail(req, res);
  const watcheds = await Watched.find({ userEmail });
  res.status(200).json(watcheds);
});

router.delete("/delete/:id", withAuth, async (req, res) => {
  const id = req.params.id;
  await Watched.findByIdAndDelete(id);
  res.status(200).send();
});

router.put("/update/:id", withAuth, async (req, res) => {
  const id = req.params.id;
  const watched = req.body;
  await Watched.findByIdAndUpdate(id, watched, { new: true });
  res.status(200).send();
});

module.exports = router;
