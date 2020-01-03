console.log("Hello From ArrayDemo");


var myarr=[10,20,30,40];
console.log(myarr.join(" "));
console.log(myarr[0]);


var str=0;
var i;
for(i=0; i<myarr.length; i++)
{
    str+=myarr[i];
   // console.log(str+=i);
}

console.log(str);    
    
var myarr=["Hello","word","js"];
console.log(myarr[0]);

myarr[3]="React";
console.log(myarr);

var arr = new Array(10);

for(var i=0;i<=10;i++)
{
    arr[i]=i;
}


arr[11]=11;
arr[20]=20;
console.log(arr);

var counter=0;
for(var i=0; i<arr.length; i++)
{
    counter++;
}
console.log(counter);
console.log(arr["14"]);


