/**************** IMPORTS ************/
const express = require("express");
const {
  loginForm,
  registerForm,
  registerUser,
  confirmarCuenta,
  loginUser,
} = require("../controllers/authController");

/**************** ESTABLECER RUTAS PARA /AUTH/ ************/
const router = express.Router();
router.get("/register", registerForm);
router.post("/register", registerUser);
router.get("/login", loginForm);
router.get("/confirmar/:token", confirmarCuenta);
router.get("/logoup");
router.post("/login", loginUser);

/**************** EXPORTS ************/
module.exports = router;
