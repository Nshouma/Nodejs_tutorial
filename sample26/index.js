//サーバー起動はsample24/index.jsで
//POSTリクエスト送信
var http = require("http");
var data = "Hello World!\n";
var url = "http://localhost:3000";
var options = {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": Buffer.byteLength(data)
  }
};
var request = http.request(url, options, (res) => {
  res.pipe(process.stdout);
});
request.on("error", (err) => {
  console.log(err.message);
});
request.end(data);