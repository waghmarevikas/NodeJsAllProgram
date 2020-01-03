var utility = require('./Utility');
var readline = require('readline-sync');
var count=0;
var array = new Array();
 var arrsize = readline.questionInt("Enter size of Array :");
 console.log("Enter Array "+arrsize+"Elements ");
 for(var i=0; i<arrsize;i++)
{
    console.log("Enter Array of "+[i]+" ");
    array[i] = readline.questionInt();  
   // array[i]=count;
   // count++;
}
console.log(array);
utility.maxTwoNo(array);