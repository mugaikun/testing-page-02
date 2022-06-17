/**************** IMPORTS ************/
const mongoose = require("mongoose");

/**************** CONECTAR CON MONGODB.COM ************/
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("db conectada");
  })
  .catch((e) => {
    console.log("fallo conexion" + e);
  });
