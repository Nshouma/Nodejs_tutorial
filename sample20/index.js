//var randomstring = require("./ramdomstring.js");
//console.log(randomstring());

var CustomReader = require("./customreader.js");
var CustomWriter = require("./customwriter.js");

/* var reader = new CustomReader();
reader.on("data", (chunk)=>{
  console.log(chunk);
});
reader.resume(); */

var reader = new CustomReader();
var writer = new CustomWriter();
reader.pipe(writer);
reader.resume();