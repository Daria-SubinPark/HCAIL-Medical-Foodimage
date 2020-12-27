const express = require('express');
const comment = express.Router();
const commentlCtrl = require("./comment.ctrl")

comment.post("/", commentCtrl.saveComment)

module.exports = comment;