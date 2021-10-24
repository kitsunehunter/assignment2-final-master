/*
contact.js
xavier zhang
300944977
Oct 19 2021
*/
"use-strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  cellphone: { type: String, required: true },
  relation: { type: String, required: true },
});

const model = mongoose.model("contactSchema", ContactSchema);

module.exports = model;
