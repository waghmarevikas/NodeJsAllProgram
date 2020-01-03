console.log("This Is from Function");
console.log("Method Overriding is allowed in JS but output will be display last method at all time");
console.log();


function add()
{
    console.log("Hiii...");
    return ;
};
var nam="vikas";
var nam1=100;
console.log(add(nam));



function add1()
{
    return "Hello"
};
var str=add1();
console.log(str);


var f1=function f2()
{
    console.log("F2...");
    console.log();
};
f1();
console.log(f1);


//var f3=1;
//.f3();  This is not allowed because f3 var with integer value so it can not a function;


var f4=function()
{
    console.log("This is From F4");
};

var f5=function(fun)
{
    console.log("This is from F5");
}

f5(f4());

