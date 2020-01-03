var read = require('readline-sync');
var a = read.questionInt("Enter A value : ");
var b = read.questionInt("Enter B value : ");
var c = read.questionInt("Enter C value : ");
var delta = b*b-4*a*c;
console.log("Delta is : "+delta);
var root1 = (-b + Math.sqrt(delta))/(2*a);
console.log("First Root is : "+root1);
var x = root1;
console.log("Using First Roor is : "+(a*x*x+b*x+c));
var root2 = (-b - Math.sqrt(delta))/(2*a);
console.log(" Second Root is "+root2);
var x = root2;
console.log("Using Second Root is : " +(a*x*x+b*x+c))