/**************** IMPORTS ************/
const mongoose = require("mongoose");
const { Schema } = mongoose;

/**************** PLANTILLA ************/
const urlSchema = new Schema({
  origin: {
    type: String,
    unique: true,
    required: true,
  },
  shortURL: {
    type: String,
    unique: true,
    required: true,
  },
});

const Url = mongoose.model("Url", urlSchema);

/**************** EXPORTS ************/
module.exports = Url;
