const mongoose = require("mongoose");

const ToWatchSchema = new mongoose.Schema(
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
    link: {
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
  { collection: "toWatch" }
);

module.exports = mongoose.model("ToWatch", ToWatchSchema);
