var read = require('readline-sync');
var x = read.questionInt("Enter X : ");
var y = read.questionInt("Enter Y : ");
console.log(x);
var dis = (Math.pow(x*x,y*y));
console.log("Distance of X anh Y is : "+dis);