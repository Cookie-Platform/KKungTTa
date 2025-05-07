// backend/server.js
const express = require("express");
const app = express();
const port = 5000;

// 간단한 API 예시
app.get("/", (req, res) => {
  res.send("backend server on.");
});

app.listen(port, () => {
  console.log(`Server listening "http://localhost:${port}"`);
});
