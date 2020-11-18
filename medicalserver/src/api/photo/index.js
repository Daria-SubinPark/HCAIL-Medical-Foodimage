const express = require('express');
const photo = express.Router();
const photoCtrl = require("./photo.ctrl")


// Find picture using date in DB
photo.post("/date", photoCtrl.findPhotoByDate);

// 특정한 사람이 찍은 사진 전부 반환
photo.post("/photo", photoCtrl.findPhotoByUser)

// Find picture using photo name in DB
photo.post("/name", photoCtrl.findPhotoByName);

// 특정한 사람이 특정한 날짜에 찍은 사진 반환
photo.post("/dateforpatient", photoCtrl.findPhotoByDateForUser);

module.exports = photo;

