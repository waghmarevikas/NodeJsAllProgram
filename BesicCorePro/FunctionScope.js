console.log("Program From Function Scope :");
console.log();

var name = "vikas";
function v1(name)
{
    var name1="VVV";
    console.log(name1);
    name1=name
    console.log(name1);
    return(name1);
}
console.log(name);
v1(name);

var a=10;
var b=20;

console.log(a+b);
console.log();
console.log();



(function()
{
    console.log("From Nun name Method");
})();

console.log()
var a1=10;
function aa()
{
    var b=20;
    var c=b;
    console.log(b+" "+c);
    console.log(a1);
}
aa();
