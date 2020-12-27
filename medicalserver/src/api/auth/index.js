const express = require('express');
const auth = express.Router();
const userCtrl = require("./auth.ctrl")

auth.post("/login", userCtrl.login)
auth.get("/user", userCtrl.getAllUser)

module.exports = auth;