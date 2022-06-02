const express = require("express");
const { create } = require("express-handlebars");

const app = express();
const port = 3000;

/* Plantilla */
const hbs = create({
  extname: ".hbs", // Leer solo extension .hbs
  partialsDir: ["views/components"], // Leer carpeta /components
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

/* Middleware - Rutas publicas frontend */
// app.use(express.static(__dirname + "/public"));
app.use("/", require("./routes/home"));
app.use("/auth", require("./routes/auth"));

// app.get("/", (req, res) => {
//   // Simular desde base de datos
//   const urls = [
//     {
//       origin: "www.google.com/bluuweb1",
//       shortURL: "Mi ruta 1",
//     },
//     {
//       origin: "www.google.com/bluuweb2",
//       shortURL: "Mi ruta 2",
//     },
//     {
//       origin: "www.google.com/bluuweb3",
//       shortURL: "Mi ruta 3",
//     },
//     {
//       origin: "www.google.com/bluuweb4",
//       shortURL: "Mi ruta 4",
//     },
//   ];
//   res.render("home", { urls: urls }); // renderizar home.hbs
// });

// app.get("/login", (req, res) => {
//   res.render("login"); // renderizar login.hbs
// });

/*  */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});