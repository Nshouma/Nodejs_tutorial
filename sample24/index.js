var http = require("http");
var server = http.createServer((req, res) => {
  console.log(
    `[${(new Date()).toISOString()}]`+
    `${req.method} ${req.url}`+
    `${req.headers["user-agent"]}`
  );
  res.end("hello world!");
});
server.listen(3000);