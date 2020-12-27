const express = require('express');
const api = express.Router();

const auth = require("./auth/index")
const comment = require("./comment/index")
const photo = require("./photo/index")

api.use("/auth", auth)
api.use("/comment", comment)
api.use("/photo", photo)

module.exports = api;