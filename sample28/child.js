setTimeout(() => {
  process.send({hello: "message from child."});
}, 3000);

process.on("message", (data)=>{
  console.log(data);
});
