var r1=1;
var array = new Array(3);

for(var i =0 ; i<array.length; i++)
{
    array[i] = new Array(3);
    for(var j=0; j<array.length; j++)
    {
        array[i][j] = '*';
    }
}
console.log(array.join("\n"));