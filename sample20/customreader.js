//ランダム文字列を読み取るCustomReadableStreamを作成
const {Readable} = require("stream");
const randomstring = require("./ramdomstring.js");
const data = randomstring();

var CustomReader = class extends Readable{
  constructor(options){
    super(options || {encoding: "utf8" });
    this._current = 0;
  }
  _read(size){
    var start = this._current;
    var end = start + size < data.length ? start + size : data.length;
    var chunk;

    try{
      chunk = data.slice(start, end);
      
    }catch(error){
      process.nextTick(()=>{this.emit("error",error);});
    };
    this.push(chunk);
    
    if(start + size < data.length){
      this._current = end;
    }
    else{
      this.push(null);
    }
  }
};

module.exports = CustomReader;