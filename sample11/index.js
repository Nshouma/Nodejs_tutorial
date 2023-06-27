var {echo, area} = require("./methods");
var Lamborghini = require("./lamborghini");
var config = require("./config");

echo("Hello World!");
console.log(area(5, 10));

var car = new Lamborghini("lamborghini");
car.echo();
car.drive();

console.log(JSON.stringify(config));