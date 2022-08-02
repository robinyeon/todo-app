const express = require("express");
const morgan = require("morgan");
const globalRouter = require("./routers/globalRouter");
const todoRouter = require("./routers/todoRouter");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/todo-app");
mongoose.connection.on("error", (error) => console.log("Error: ", error));
mongoose.connection.once("open", () => console.log("✅ DB connected"));

const app = express();
const PORT = 8080;
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/todos", todoRouter);

app.listen(PORT, () => {
  console.log(`✅ Server listening to port ${PORT}`);
});
