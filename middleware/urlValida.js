/**************** IMPORTS ************/
const { URL } = require("url");

/**************** VALIDAR URLS ************/
const urlValidar = (req, res, next) => {
  try {
    const { origin } = req.body;
    const urlFrontend = new URL(origin);
    if (urlFrontend.origin !== "null") {
      if (
        urlFrontend.protocol === "http:" ||
        urlFrontend.protocol === "https:"
      ) {
        return next();
      }
    }
    throw new Error("no válida 😲");
  } catch (error) {
    // console.log(error);
    return res.send("url no valida");
  }
};

/**************** EXPORTS ************/
module.exports = urlValidar;
