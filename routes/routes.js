const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers.js");

router.use("/", controller);

module.exports = router;