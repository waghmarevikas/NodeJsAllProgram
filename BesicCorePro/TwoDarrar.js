console.log("Two D Array Program");

var array = new Array(2);
var readline = require('readline-sync');
for(var i=0; i<2; i++)
{
    array[i]= new Array(5);
    for(var j=0; j<5; j++)
    {
        array[i][j]=readline.questionInt("Enter Array ");
    }
}
console.log(array.join("\n "));