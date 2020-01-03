var mystring="Hello";
console.log(mystring);

var mystr = {};

console.log(mystr);
mystr.prop="ObjectOfProperty";

console.log(mystr);
mystr.prop2="Hi....!";

console.log(mystr);
mystr.prop3=123;

console.log(mystr);

var myobj={"prop": "hiii", "prop2":"JavaScript" ,"objprop":{"innerprop":"inner property"}};

console.log(myobj);

console.log(myobj["prop2"]);

var propertyName="prop2";

console.log(myobj[propertyName]);
console.log(myobj.objprop.innerprop);

myobj.objprop.newinner="new inner value";
console.log(myobj);
console.log(myobj.objprop["newinner"]);

myobj2=myobj;
console.log(myobj2);
console.log(myobj2.objprop);

if(myobj === myobj2)
{
    console.log("Both Are Equals");
}


