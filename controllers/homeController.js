const Url = require("../models/url");

const leerUrls = async (req, res) => {
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
};

const agregarUrl = async (req, res) => {
  const { origin } = req.body;

  try {
    const url = new Url({
      origin: origin,
    });
    await url.save();
    console.log("agregado");
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("error algo fallo");
  }
};

module.exports = {
  leerUrls,
  agregarUrl,
};
