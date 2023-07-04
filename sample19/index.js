//サンプルテキストをストリームで読み込む
var path = require("path");
var fs = require("fs");
var data = "";

var reader = fs.createReadStream(path.join(__dirname, "sample.txt"), "utf8");
reader.on("data", (chunk) =>{
  data += chunk;
});
reader.on("end", () => {
  console.log(data);
});
reader.resume();

//任意の文字列をテキストファイルに出力
var writer = fs.createWriteStream(path.join(__dirname, "created.txt"), "utf8");
writer.end("Hello world!");

//読み込んだファイルをパイプして出力
var write = fs.createWriteStream(path.join(__dirname, "sample-copy.txt"), "utf8");
reader.pipe(write);
reader.resume();