const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
  res.send("GET all items");
});

router.get("/:id", (req, res) => {
  res.send(`Item with id ${req.params.id} just called!`);
});

module.exports = router;
