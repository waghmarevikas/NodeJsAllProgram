console.log("This is from Deleted Object");
var person={name:"vikas",email:"info@gmail.com",mob:0000000};
console.log(person);

person.mob=undefined;
console.log(person.mob);
console.log(person);

delete person.mob;
console.log(person);

person={mob:1111};
console.log(person);

