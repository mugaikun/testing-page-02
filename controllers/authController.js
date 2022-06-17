/**************** IMPORTS ************/
const User = require("../models/User");
const { nanoid } = require("nanoid");

/**************** LOGIN FORM ************/
const loginForm = (req, res) => {
  res.render("login");
};

/**************** REGISTER FORM ************/
const registerForm = (req, res) => {
  res.render("register");
};

/**************** REGISTER CUENTA ************/
const registerUser = async (req, res) => {
  console.log(req.body);
  const { userName, email, password } = req.body;

  try {
    let user = await User.findOne({ email: email });
    console.log(user);
    if (user) {
      throw new Error("ya esta registrado ese usuario");
    }

    user = new User({
      userName,
      email,
      password,
      rol: "administrador",
      tokenConfirm: nanoid(),
    });

    await user.save();

    // enviar correo electronico con la confirmacion de la cuenta

    res.redirect("/auth/login");
  } catch (error) {
    res.json({ error: error.message });
  }
};

/**************** CONFIRM CUENTA ************/
const confirmarCuenta = async (req, res) => {
  const { token } = req.params;
  try {
    const user = await User.findOne({ tokenConfirm: token });
    if (!user) {
      throw new Error("no existe este usuario");
    }

    user.cuentaConfirmada = true;
    user.tokenConfirm = null;

    await user.save();
    res.redirect("/auth/login");
  } catch (error) {
    res.json({ error: error.message });
  }
};

/**************** LOGIN CUENTA ************/

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("no existe este email");
    }

    if (!user.cuentaConfirmada) {
      throw new Error("falta confirmar email");
    }

    if (!(await user.comparePassword(password))) {
      throw new Error("password no valida");
    }

    res.redirect("/");
  } catch (error) {
    res.json({ error: error.message });
  }
};

/**************** EXPORTS ************/
module.exports = {
  loginForm,
  registerForm,
  registerUser,
  confirmarCuenta,
  loginUser,
};
