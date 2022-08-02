const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("My first nodeJS project will be started soon :)");
});

app.listen(PORT, () => {
  console.log(`✅ Server is listening to port ${PORT}`);
});
