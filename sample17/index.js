var path = require("path");
var filepath = "C:\\\\sample\\index.html";

console.log(path.dirname(filepath));
console.log(path.basename(filepath));
console.log(path.extname(filepath));

console.log(path.join("C:\\\\sample","index.html"));
console.log(path.normalize("C:\\\\sample\\lib\\..\\index.html"));