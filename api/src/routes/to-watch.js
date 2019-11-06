const express = require("express");

const ToWatch = require("../models/ToWatch");
const withAuth = require("../utils/with-auth");
const getEmail = require("../utils/get-email");

const router = express.Router();

router.post("/add", withAuth, (req, res) => {
  const toWatchItem = req.body;
  toWatchItem.userEmail = getEmail(req, res);
  const toWatch = new ToWatch(toWatchItem);
  toWatch.save(err => {
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
  const toWatch = await ToWatch.findById(id);
  res.status(200).json(toWatch);
});

router.get("/get-all", withAuth, async (req, res) => {
  const userEmail = getEmail(req, res);
  const toWatchList = await ToWatch.find({ userEmail });
  res.status(200).json(toWatchList);
});

router.delete("/delete/:id", withAuth, (req, res) => {
  const id = req.params.id;
  ToWatch.findByIdAndDelete(id, err => {
    if (err) {
      console.error(err);
      res.status(500).json("Erro ao deletar");
    }
    res.status(200).json("Deletado com sucesso");
  });
});

router.put("/update/:id", withAuth, (req, res) => {
  const id = req.params.id;
  const toWatch = req.body;
  ToWatch.findByIdAndUpdate(id, toWatch, { new: true }, err => {
    if (err) {
      console.error(err);
      res.status(500).json("Erro ao atualizar");
    }
    res.status(200).json("Atualizado com sucesso");
  });
});

module.exports = router;
