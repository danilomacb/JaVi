const mongoose = require("mongoose");

const WatchedSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String
    },
    genre: {
      type: String
    },
    season: {
      type: String
    },
    episode: {
      type: String
    },
    comment: {
      type: String
    },
    userEmail: {
      type: String,
      required: true
    }
  },
  { collection: "watched" }
);

module.exports = mongoose.model("Watched", WatchedSchema);
