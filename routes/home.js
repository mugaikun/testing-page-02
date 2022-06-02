const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Simular desde base de datos
  const urls = [
    {
      origin: "www.google.com/bluuweb1",
      shortURL: "Mi ruta 1",
    },
    {
      origin: "www.google.com/bluuweb2",
      shortURL: "Mi ruta 2",
    },
    {
      origin: "www.google.com/bluuweb3",
      shortURL: "Mi ruta 3",
    },
    {
      origin: "www.google.com/bluuweb4",
      shortURL: "Mi ruta 4",
    },
  ];
  res.render("home", { urls: urls }); // renderizar home.hbs
});

module.exports = router;
