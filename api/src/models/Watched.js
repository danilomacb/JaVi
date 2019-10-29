const mongoose = require("mongoose");

const WatchedSchema = new mongoose.Schema({
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
    type: String,
    required: false
  },
  userEmail: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Watched", WatchedSchema);
