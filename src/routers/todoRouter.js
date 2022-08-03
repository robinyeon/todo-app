const express = require("express");
const Todo = require("../models/Todo");
const todoRouter = express.Router();

const postItem = async (req, res) => {
  const { item } = req.body;
  console.log(req.body);
  await Todo.create({ item });
  res.redirect("/todos");
};

const getList = async (req, res) => {
  const items = await Todo.find({}).sort({ createdAt: -1 });
  res.render("todos", { items });
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  res.render("todos", { id });
};

todoRouter.get("/", getList);
todoRouter.post("/", postItem);
todoRouter.delete("/delete/:id", deleteItem);

module.exports = todoRouter;
