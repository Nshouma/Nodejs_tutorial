var Clock = require("./clock.js");
var i = 0;
var clock = new Clock();
clock.on("tick", ()=>{
  console.log(++i);
  if(i > 3){
    clock.stop();
  }
});
clock.start();