var utility = require('../Algorithom/Utility');
var read = require('readline-sync');
var size = read.questionInt("Enter Array size : ");
var array = new Array(size);
for(var i=0; i<array.length; i++)
{
    array[i] = read.questionInt("Enter Array Element : ");
}
utility.insertionSort(array);
