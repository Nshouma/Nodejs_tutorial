/* var Car = class {
  constructor(name){
    this.name = name;
  }

  drive(){
    console.log("zoom zoom...");
  }
};

var Lamborghini = class extends Car{
  constructor(name){
    super(name);
  }

  echo(){
    super.drive();
  }

  drive(){
    console.log(`fire ${this.name}`);
  }
} */

var util = require("util");

var Car = function(name){
  this.name = name;
};

//メソッドはprototypeに対して作成
Car.prototype.drive = function(){
  console.log("zoom zoom...");
};

var Lamborghini = function(name){
  Lamborghini.super_.call(this, name);
};
//継承
util.inherits(Lamborghini, Car);

Lamborghini.prototype.echo = function(){
  //親クラスのメソッドを呼び出す
  Lamborghini.super_.prototype.drive.call(this);
};

Lamborghini.prototype.drive = function(){
  console.log(`fire ${this.name}`);
}

var car = new Lamborghini("lamborghini");
car.echo();
car.drive();