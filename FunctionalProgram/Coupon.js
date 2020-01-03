var num = parseInt(Math.random()*10);
var arr = new Array();
console.log(num);
for(var i=0; i<arr.length; i++)
{
    arr[i]=num;
    if(arr[i]!=num)
    {
        arr[i]=num;
    }
}
console.log(arr);