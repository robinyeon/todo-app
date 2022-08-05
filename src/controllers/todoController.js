const Todo = require("../models/Todo");

const postItem = async (req, res) => {
  const { item } = req.body;
  await Todo.create({ item });
  res.redirect("/todos");
};

const getList = async (req, res) => {
  const items = await Todo.find({}).sort({ createdAt: -1 });
  res.render("todos", { items });
};

const editItem = async (req, res) => {
  const { id } = req.params;
  const foundItem = await Todo.findById(id);
  const items = await Todo.find({}).sort({ createdAt: -1 });
  res.render("edit", { foundItem, items });
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  const { item } = req.body;
  await Todo.findByIdAndUpdate(id, { item });
  res.redirect("/todos");
};

const removeItem = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.redirect("/todos");
};

module.exports = {
  postItem,
  getList,
  removeItem,
  editItem,
  updateItem,
};
