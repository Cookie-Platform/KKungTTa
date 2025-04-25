// backend/server.js
const express = require("express");
const app = express();
const port = 5000;

// 간단한 API 예시
app.get("/", (req, res) => {
  res.send("백엔드 서버가 정상적으로 작동합니다!");
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});
