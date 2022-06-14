const Url = require("../models/url");
const { nanoid } = require("nanoid");

const leerUrls = async (req, res) => {
  // Simular desde base de datos

  try {
    const urls = await Url.find().lean();

    res.render("home", { urls: urls }); // renderizar home.hbs
  } catch (error) {
    console.log("Error al consultar base de datos " + error);
    res.send("fallo base de datos");
  }
  /*
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
  */
};

const agregarUrl = async (req, res) => {
  const { origin } = req.body;

  try {
    const url = new Url({
      origin: origin,
      shortURL: nanoid(8),
    });
    await url.save();
    console.log("agregado");
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("error algo fallo");
  }
};

const eliminarUrl = async (req, res) => {
  const { id } = req.params;

  try {
    await Url.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("error algo fallo");
  }
};

const editarForm = async (req, res) => {
  const { id } = req.params;
  try {
    const url = await Url.findById(id).lean();
    console.log(url);
    res.render("home", { url });
  } catch (error) {}
};

const editarUrl = async (req, res) => {
  const { id } = req.params;
  const { origin } = req.body;
  try {
    await Url.findByIdAndUpdate(id, { origin: origin });
    res.redirect("/");
  } catch (error) {}
};

const redireccionamiento = async (req, res) => {
  const { shorUrl } = req.params;
  try {
    const urlDB = await Url.findOne({ shorUrl: shorUrl });
    res.redirect(urlDB.origin);
  } catch (error) {}
};

module.exports = {
  leerUrls,
  agregarUrl,
  eliminarUrl,
  editarForm,
  editarUrl,
  redireccionamiento,
};
