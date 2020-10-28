/* 安装  初始化 引入 */
var https = require("https");
var express = require("express");
console.log("Server is running....");
// /* 创建服务器 */
// var app = express();

// /* 接受请求并反馈数据渲染到界面*/
// app.get("/", function (req, res) {
//     res.send("I am Server-2-----");
// })
// https.get("https://api.uomg.com/api/visitor.info?skey=" + Date.now, function (res) {
//     res.on("data", function (chunk) {
//         console.log("on data......");
//         var result = JSON.parse(JSON.parse(JSON.stringify(chunk + "")))
//         console.log(result);
//     });
//     res.on("end", function (chunk) {
//         console.log("request  end ......");
//     });
//     console.log("send request");
// })
// app.listen(5000, function () {

//     console.log("Server is running....");
// })
