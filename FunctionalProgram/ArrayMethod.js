console.log("Array Method Operation :")
var myarr = [19,40,23,45,54];
console.log(myarr);
console.log(myarr.length);
myarr.push(10);
console.log(myarr);
console.log(myarr.length);

myarr.pop();
console.log(myarr);

console.log();
myarr.shift();
console.log(myarr);


console.log();
console.log(myarr.unshift(7));
console.log(myarr);

var fun = function(myarr)
{
    console.log("For Each Element "+myarr);
}
myarr.forEach(fun);