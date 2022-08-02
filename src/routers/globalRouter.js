const express = require("express");

const globalRouter = express.Router();

const home = (req, res) => {
  res.render("home");
};

globalRouter.get("/", home);

module.exports = globalRouter;
