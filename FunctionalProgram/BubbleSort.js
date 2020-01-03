var utility = require('./Utility');
var readline = require('readline-sync');
var size = readline.questionInt("Enter size of Array : ");
var array = new Array(size);
for(var i=0; i<array.length; i++)
{
    array[i] = readline.questionInt("Enter array element : ");
}
utility.bubbleSort(array);