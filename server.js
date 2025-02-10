const express = require("express");
const app = express();
const port = 3100;

// 设置静态文件目录
app.use(express.static("public"));

// 启动服务器
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
