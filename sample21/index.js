const fs = require("fs");
const path = require("path");
const iconv = require("iconv-lite");

fs.readFile(path.join(__dirname, "sample.txt"), (err, data)=>{
  console.log(iconv.decode(data, "shiftjis"));
});

fs.writeFile(
  path.join(__dirname, "test.txt"),
  iconv.encode("こんにちは", "shiftjis"),
  (err) => {
    console.log("OK");
  }
);

var reader = fs.createReadStream(path.join(__dirname, "sample.txt"));
var decoder = iconv.decodeStream("shiftjis");
reader.pipe(decoder);
decoder.on("data", (chunk) => {
  console.log(chunk);
});
reader.resume();

var encoder = iconv.encodeStream("shiftjis");
var writer = fs.createWriteStream(path.join(__dirname, "test2.txt"));
encoder.pipe(writer);
encoder.write("こんにちは");
encoder.end();