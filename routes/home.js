const express = require("express");
const {
  leerUrls,
  agregarUrl,
  eliminarUrl,
  editarForm,
  editarUrl,
  redireccionamiento,
} = require("../controllers/homeController");
const urlValidar = require("../middleware/urlValida");
const router = express.Router();

router.get("/", leerUrls);
router.post("/", urlValidar, agregarUrl);
router.get("/eliminar/:id", eliminarUrl);
router.get("/editar/:id", editarForm);
router.post("/editar/:id", urlValidar, editarUrl);
router.get("/:shorUrl", redireccionamiento);

module.exports = router;
