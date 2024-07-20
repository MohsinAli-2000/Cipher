const mongoose = require("mongoose");

const gridSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  coordinates: [{ row: Number, column: Number, character: String }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Grid", gridSchema);
