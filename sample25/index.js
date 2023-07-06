var http = require("http");
var fs = require("fs");

//サーバー起動
var server = http.createServer((req, res) => {
  console.log(
    `[${(new Date()).toISOString()}]`+
    `${req.method} ${req.url}`+
    `${req.headers["user-agent"]}`
  );
  if(req.method==="POST"){
    req.pipe(res);
  }else{
    var reader = fs.createReadStream(path.join(__dirname, "sample.txt"), "utf8");
    reader.pipe(res);
  }
});
server.listen(3000);

//GETリクエスト送信
var path = require("path");
var url = "http://localhost:3000";
var options = {
  method: "GET"
};

var req = http.request(url, options, (res) => {
  res.pipe(process.stdout);
});
req.end();