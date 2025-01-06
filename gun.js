const express = require("express");
const Gun = require("gun");
const os = require("os");
// 获取网络接口列表
const interfaces = os.networkInterfaces();

// 创建 Express 应用
const app = express();

// 使用静态文件服务（用于加载前端页面）
app.use(express.static(__dirname));

// 启动 HTTP 服务器
const server = app.listen(1976, "0.0.0.0", () => {
  // 遍历所有网络接口
  for (const key in interfaces) {
    const faces = interfaces[key];
    // 确保该地址是IPv6且不是内部地址
    if (faces) {
      for (const iface of faces) {
        if (iface && !iface.internal) {
          if (iface.family === "IPv4") {
            const ipv4 = `http://${iface.address}:${1976}/gun`;
            return console.log("Gun.js server is running at " + ipv4);
          }
        }
      }
    }
  }
});

// 将 Gun.js 附加到 HTTP 服务器
Gun({ web: server });
