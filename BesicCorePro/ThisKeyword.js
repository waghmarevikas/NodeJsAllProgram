console.log("This is From this keyword");
console.log();

//var person={"name":"vikas","email":"info@mail.com","city":function(){console.log("From Pune")
//return person.name+" "+person.email}};
//console.log(person);

var person1={"name":"vikas","email":"info@mail.com",

"isFrom":{ "state":"Maha", "pincode":411015,
"PerInfo":function(tstate)
     {
        if( person1.isFrom.state===tstate)
        {
        return true;
        }
        else
        {
        return false;
        }
    }}};
//console.log(person);


//person.city();

console.log(person1);
person1.isFrom.PerInfo();
console.log();



