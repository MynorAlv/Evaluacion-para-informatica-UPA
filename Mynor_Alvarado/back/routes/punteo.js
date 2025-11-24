const express = require("express");
const router = express.Router();

const { guardarPunteo } = require("../controllers/punteoController");

router.post("/guardar_punteo", guardarPunteo);

module.exports = router;
