//ランダム文字列を生成するモジュールRamdomStringを生成
module.exports = function(max = 10){
  var data = [];
  var original = "0123456789qazwsxedcrfvtgbyhnujmikolp";
  var length = original.length;
  for(var i = 0; i < max; i++){
    data[i] = original[Math.floor(Math.random() * length)];
  }
  return data.join("");
};