var set = new Set();

var name = {name:"vikas"};
var city = {name:"mumbai"};
var cls = {name:"JSPm"};
set.add(name);
set.add(city);
set.add(cls);
set.add(cls);
set.add("pune");
set.add("pune");
console.log(set);
set.delete("pune");
console.log(set);
console.log("Has() "+set.has("pune"));
console.log(set);
console.log("size is : "+set.size);
for(let i of set)
{
    console.log(i);
}
console.log("Deleted : "+set.delete(cls));
set.clear();
console.log(set);
