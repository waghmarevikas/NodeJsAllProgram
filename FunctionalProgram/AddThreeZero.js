console.log("Program For Addition Of Three Number Is Zero");
var utility = require('./Utility');
var readline = require('readline-sync');
var arrsize = readline.questionInt("Enter Array size ");
var array = new Array();
console.log("your Array size is : "+arrsize );
for(var i=0; i<arrsize; i++)
{
    console.log("Enter Array of "+[i]);
    array[i]=readline.questionInt("Element is : ");
}
console.log("Totle Array is : "+array);
utility.addThreeZero(array,arrsize);