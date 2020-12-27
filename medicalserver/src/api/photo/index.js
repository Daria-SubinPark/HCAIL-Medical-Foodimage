const express = require('express');
const photo = express.Router();
const photoCtrl = require("./photo.ctrl")

photo.post("/find", photoCtrl.findPhoto);
photo.post("/save", photoCtrl.savePhoto);

module.exports = photo;

