var read = require('readline-sync');
var utility = require('../Queue');
var queue = new utility.QueueDemo();
var size = read.questionInt("Enter size of array ");
var array = new Array(size);
var range =100;
var prime = [];

function primeIs()
{ 
    for(let i=1; i<=size; i++)
    {
        if(utility.primeNumber(i)==i)
        { 
            prime.push(i);
        }
    }
}
primeIs();
    console.log("Prime Number is : "+prime);
    
