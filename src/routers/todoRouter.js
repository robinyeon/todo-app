const express = require("express");
const Todo = require("../models/Todo");
const {
  postItem,
  getList,
  editItem,
  updateItem,
  removeItem,
} = require("../controllers/todoController");
const todoRouter = express.Router();

todoRouter.get("/", getList);
todoRouter.post("/write", postItem);
todoRouter.get("/edit/:id", editItem);

todoRouter.post("/update/:id", updateItem);

todoRouter.get("/remove/:id", removeItem);

module.exports = todoRouter;
