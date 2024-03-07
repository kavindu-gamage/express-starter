const express = require("express");
const router = express.Router();
const Customer = require('../model/CustomerModel');

router.get("/", (req, res) => {
  res.send(`Customer API just Called`);
});

router.get("/:id", (req, res) => {
  res.send(`Customer with id ${req.params.id} just called!`);
});

router.post("/", async (req, res) => {
  try {
    const customer = await Customer(req.body);
    res.status(201).send({
      success: true,
      data: customer,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
  res.send(req.body);
});

router.put("/:id", (req, res) => {
  res.send(`Customer with id ${req.params.id} just updated!`);
});

module.exports = router;
