const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId, // Use ObjectId for the _id field
    required: true,
  },
  date: {
    type: String, // You can use String if storing date as a string (e.g., "2024-10-03")
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  issue: {
    type: String,
    required: true,
  },
  steps_to_resolve: {
    type: Map,
    of: String, // Allows a flexible map of key-value pairs
  },
  imgPath: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
