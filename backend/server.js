const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/api/chat", (req, res) => {
  res.send("List Chats");
});

app.get("/api/chat/:id", (req, res) => {
  res.send(req.params.id);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
