var read = require('readline-sync');
console.log("                               Program of Day Of Week ");
console.log();

var d = new Date();


var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

function week()
{
    for(let i = 0; i<weekday.length; i++)
    {
        var d1 = weekday[d.getDay()];
        console.log(weekday[i]);
    }
}
console.log("Week of Day : ");
console.log();
week();

var m = read.questionInt("Enter Month : ");
var dd = read.questionInt("Enter Day : ");
var y = read.questionInt("Enter Year : ");
var temp = y;
var y0, x, m0, d0;
var count=0;
while(y != 0)
{
    temp = temp % 10;
    count++;
}
if(count === 4)
{
    // y0 = parseInt(y-(14-m)/12);
    // console.log("Year is : "+y0);
}
else
{
    console.log("Enter valid year : ");
}