//※ブラウザでlocalhost:3000にアクセスして確認
var http = require("http");
var server = http.createServer((req, res)=>{
  res.end("hello world!");
});
server.listen(3000);