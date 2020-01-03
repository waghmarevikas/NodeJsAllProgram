var input = require('readline-sync');
var size = input.question("Enter Array Size : ");
var array1 = new Array(size);
var array2 = new Array(size);
var row = input.question("Enter Row : ");
var clo = input.question("Enter Column : ");


var i,j;
for( i=0; i<row; i++)
{
    array1[i] = new Array(row);
    for( j=0; j<clo; j++)
    {
        array1[i][j] = input.question("Enetr number : "+" [i] : "+[i]+" [j] : "+[j]+" ");
    }
}

console.log("Array is:");
console.log(array1.join("  \n"));

                var zero = function()
                {
                    console.log("Hi..");
                for(i=0; i<row; i++)
                {
                    array1[i] = new Array(row);
                    for(j=0; j<clo; j++)
                    {
                        if(array1[i][j]='*')
                        {
                           return true;
                        }
                        else //if (array1[i][j]='*')
                        {
                            return false;
                        }
                    }
                }
                }

      console.log("zero is ");
      console.log(zero());
      console.log();

      console.log("Star is ");
      console.log(zero());