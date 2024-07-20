const express = require("express");
const Grid = require("../models/Grid");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const router = express.Router();

router.post("/", [auth, admin], async (req, res) => {
  const grid = new Grid(req.body);
  await grid.save();
  res.status(201).json(grid);
});

router.get("/", auth, async (req, res) => {
  const grids = await Grid.find();
  res.json(grids);
});

router.get("/:id", auth, async (req, res) => {
  const grid = await Grid.findById(req.params.id);
  res.json(grid);
});

router.put("/:id", [auth, admin], async (req, res) => {
  const grid = await Grid.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(grid);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  await Grid.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
