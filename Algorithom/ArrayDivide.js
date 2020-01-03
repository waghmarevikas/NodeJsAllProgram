var utility = require('./Utility');
var input = require('readline-sync');
var size = input.questionInt("Enetr Array size : ");
var array = new Array(size);
for(var i=0; i<array.length; i++)
{
    array[i]=input.questionInt("Enter Array Element : ");
}
var leftarr  =utility.arrayLside(array);
console.log(leftarr);
var rightarr = utility.arrayRside(array);
console.log(rightarr);
var mergesort = utility.mergesort(leftarr,rightarr,array);
console.log("Merge Sort Array is :");
console.log(mergesort);