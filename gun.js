const express = require("express");
const Gun = require("gun");

// 创建 Express 应用
const app = express();

// 使用静态文件服务（用于加载前端页面）
app.use(express.static(__dirname));

// 启动 HTTP 服务器
const server = app.listen(1976, () => {
  console.log("Gun.js server is running at http://localhost:1976/gun");
});

// 将 Gun.js 附加到 HTTP 服务器
Gun({ web: server });

// 初始化 Gun 实例（可选）
// const gun = Gun();

// 示例：为数据库添加初始数据
// gun.get("chat").set({
//   user: "Server",
//   text: "Welcome to Gun.js chat!",
//   timestamp: Date.now(),
// });
