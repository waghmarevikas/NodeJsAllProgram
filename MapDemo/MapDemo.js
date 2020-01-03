var mp = new Map();
mp.set("FirstName","vikas");
mp.set("LastName","waghmare");
mp.set("city","mumbai");
mp.set("code","431720");
console.log("Map Element is ; ");
console.log(mp);

var collage = {Name:"JSPM"};
mp.set(collage,"411510");
console.log(mp);

mp.set("pen","cello")
   .set("bag","AT")
   .set("cop","mac");

var clgcity = {city:"Pune"};
mp.set("clsc",clgcity);

   console.log(mp);

for(let i of mp.keys())
{
    console.log(i);
}
for(let j of mp.values())
{
    console.log(j);
}
for(let k of mp.entries())
{
    console.log(k);
}
for(let w of mp)
{
    console.log(mp);

}
console.log("size is : "+mp.size);
mp.clear();
console.log(mp);
