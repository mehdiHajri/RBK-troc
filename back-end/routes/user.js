const express = require("express");
const route = express.Router();
const db = require("../models");
route.post("/createUser", (req, res) => {
  db.User.create({
    userName: req.body.userName,
    adress: req.body.adress,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    password: req.body.password,
  })
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});
route.get("/getAllUsers", (req, res) => {
  db.User.findAll()
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});
route.delete("/deleteUser", (req, res) => {
  db.User.destroy({ where: { id: req.params.id } })
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
});
module.exports = route;
