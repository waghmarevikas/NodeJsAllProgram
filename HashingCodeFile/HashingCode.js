var utility = require('../HashingCodeFile/Utility')
var read=require('readline-sync')
var fs = require("fs");

var list = new utility.LinkedList();


var input =fs.readFileSync('number.txt').toString();
console.log(input);
var spt = input.split(" ");
console.log("After Split : "+spt);
var array = [];
var count=0;

for(var i=0;i<spt.length;i++)
{
    var k=spt[i]%11;
    if(array[k] == undefined)
    {
    
        array[k] = new utility.LinkedList();
        array[k].addNode(spt[i]);
      
    }
    else
    {
        array[k].addNode(spt[i]);
    }
}

//Display HashingCode
for(var i=0; i<10; i++)
{
    process.stdout.write("Slot : "+i + '->');
    if(array[i]!=undefined)
    {
        process.stdout.write( array[i].displayList() + ' ');
    }
    console.log();

}

//Search Number in List
var num = read.questionInt("Enter Number for searching : ");
var n = num%11;


    if(array[n]!=undefined)
    {
        if(array[n].search(num) != num)
        {
            console.log("Number is not found .");
            console.log("Added in HashingCode . ")
            array[n].addNode(num);
            fs.writeFileSync('number.txt');

        }
        else
        {
            
            console.log("Given Number is found . ");
            array[n].deleteNode(num);

        }
    }
    else
    {
        array[n] = new utility.LinkedList();
        console.log("Number is not found so add it . ");
        array[n].addNode(num);
    }

for(var i=0; i<10; i++)
{
    process.stdout.write("Slot : "+i + '->');
    if(array[i]!=undefined)
    {
        process.stdout.write( array[i].displayList() + ' ');
    }
    console.log();

}