const express = require("express");

const Watched = require("../models/Watched");
const withAuth = require("../utils/withAuth");
const getEmail = require("../utils/getEmail");

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
  const watchedList = await Watched.find({ userEmail });
  res.status(200).json(watchedList);
});

router.delete("/delete/:id", withAuth, (req, res) => {
  const id = req.params.id;
  Watched.findByIdAndDelete(id, err => {
    if (err) {
      console.error(err);
      res.status(500).json("Erro ao deletar");
    }
    res.status(200).json("Deletado com sucesso");
  });
});

router.put("/update/:id", withAuth, (req, res) => {
  const id = req.params.id;
  const watched = req.body;
  Watched.findByIdAndUpdate(id, watched, { new: true }, err => {
    if (err) {
      console.error(err);
      res.status(500).json("Erro ao atualizar");
    }
    res.status(200).json("Atualizado com sucesso");
  });
});

module.exports = router;
