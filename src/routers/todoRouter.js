const express = require("express");
const Todo = require("../models/Todo");
const todoRouter = express.Router();

const postItem = async (req, res) => {
  const { item } = req.body;
  await Todo.create({ item });
  res.redirect("/todos");
};

const getList = async (req, res) => {
  const items = await Todo.find({});
  res.render("todos", { items });
};

todoRouter.get("/", getList);
todoRouter.post("/", postItem);

module.exports = todoRouter;
