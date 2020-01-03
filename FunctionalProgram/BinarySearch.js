var utility = require('./Utility');
var readline = require('readline-sync');

var size = readline.questionInt("Enter Array size : ");
var array = new Array(size);

for(var i=0; i<array.length; i++)
{
    array[i]=readline.questionInt("Enter in sorting order : ");
}

utility.binarysearch(array);