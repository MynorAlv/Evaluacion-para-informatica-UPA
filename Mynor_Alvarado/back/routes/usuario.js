const express = require("express");
const router = express.Router();

const { guardarUsuario } = require("../controllers/usuarioController");

router.post("/guardar_usuario", guardarUsuario);

module.exports = router;
