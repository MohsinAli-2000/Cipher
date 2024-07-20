const express = require("express");
const Message = require("../models/Message");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/encrypt", auth, async (req, res) => {
  const { user_id, plaintext } = req.body;
  const encrypted = plaintext.split("").reverse().join("");
  const message = new Message({ user_id, plaintext, encrypted });
  await message.save();
  res.status(201).json(message);
});

router.post("/decrypt", auth, async (req, res) => {
  const { user_id, encrypted } = req.body;
  const plaintext = encrypted.split("").reverse().join("");
  res.json({ plaintext });
});

module.exports = router;
