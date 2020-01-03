var read = require('readline-sync');
var utility = require('../Queue');
var size = read.questionInt("Enter array size ");
var array = new Array(size);
console.log();
console.log();
var count=0;
var k=0;

var range =100;
var prime = [];

    for(var i=0; i<=array.length; i++)
    {
        if(utility.primeNumber(i) ==i)
        {
            prime.push(i);
        }
    }
    var primeArray = new Array(prime.length);
    console.log("Prime number is : "+prime);
    console.log("Prime length "+prime.length);
        for(var i=0; i<prime.length; i++)
        { 
            for(let j=i+1; j<prime.length; j++)
            {
                //console.log("Number is ")
                
                var value = utility.anagramNumber(prime[i],prime[j]);
                //console.log("value is "+value);
                if(value == true)
                {
                    if(prime[i]<=range)
                    {
                        if(prime[j]<=range)
                        {
                           // console.log(prime[j]);
                            
                            primeArray[k++]=prime[i];
                            //console.log((" k -- "+primeArray[k]));
                            
                            
                            primeArray[k++]=prime[j];
                            //console.log("value "+primeArray[]+ "  "+primeArray[j]);
                        }
                    }
                    else
                    {
                        range = range+100;
                        k++;
                        primeArray[k] = [];
                        if(prime[j] <= range)
                        {
                            primeArray[k++]=prime[i];
                            primeArray[k++]=prime[j];
                        }
                    }
                }
                
               
            }
        }
        
        
console.log("Prime number "+prime);
    console.log(primeArray);

//Create object of Queue Using Linked List
var queue = new utility.QueueDemo();
for(var a=0; a<primeArray.length; a++)
{ 
    if(primeArray[a] === undefined)
        queue.addPrime('');
    else
        queue.addPrime(primeArray[a]);
}
console.log("Prime Anagram "+queue.displayPrime());

//Create object of Stack Using Linked List
//var stacklist = require('../DataStrutureProgram/StackDemo/Utility');
