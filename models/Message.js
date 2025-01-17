const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  plaintext: { type: String, required: true },
  encrypted: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Message", messageSchema);
