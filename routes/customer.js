const express = require("express");
const router = express.Router();
const cusController= require("../controller/CustomerController")

router.get("/", cusController.getAll);

router.get("/:id", cusController.getById);

router.post("/", cusController.save);

router.put("/:id", cusController.update);

router.delete("/:id", cusController.delete);

module.exports = router;
