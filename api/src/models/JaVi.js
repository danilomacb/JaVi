const mongoose = require("mongoose");

const JaViSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  episode: {
    type: Number,
    required: false
  },
  userEmail: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("JaVi", JaViSchema);
