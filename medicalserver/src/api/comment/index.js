const express = require('express');
const comment = express.Router();
const commentCtrl = require("./comment.ctrl")

comment.post("/", commentCtrl.saveComment)

module.exports = comment;