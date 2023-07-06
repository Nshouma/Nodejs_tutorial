var {fork} = require("child_process");
var path = require("path");

var child = fork(path.join(__dirname, "child.js"), {execArgv: []});
child.on("message", (data)=>{
  console.log(data);
});
child.on("close", (code) =>{
    console.log(`Child process exit with code ${code}`);
});

child.send({hello:"message from parent."});
child.on("close", (code)=>{
  console.log(`Child process exited with code ${code}`);
});