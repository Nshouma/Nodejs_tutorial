//100ミリ秒だけ遅延実行
setTimeout(() => {
  console.log("setTimeout()");
}, 100);

console.log("global");

//3秒待つ
var end = (new Date()).getTime() + 3000;
while ((new Date()).getTime() < end){ }