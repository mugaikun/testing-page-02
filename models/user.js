/**************** IMPORTS ************/
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

/**************** PLANTILLA ************/
const userSchema = new Schema({
  userName: {
    type: String,
    lowercase: true,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
  tokenConfirm: {
    type: String,
    default: null,
  },
  cuentaConfirmada: {
    type: Boolean,
    default: false,
  },
});

/**************** PRE - VALIDAR HASH ************/
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next;
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hast = await bcrypt.hash(user.password, salt);
    user.password = hast;
    next();
  } catch (error) {
    console.log(error);
    next();
  }
});

/**************** COMPARAR PASSWORDS ************/
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

/**************** EXPORTS ************/
module.exports = mongoose.model("User", userSchema);
