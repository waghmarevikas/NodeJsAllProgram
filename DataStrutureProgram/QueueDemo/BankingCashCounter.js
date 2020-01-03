/* a. Desc -> Create a Program which creates Banking Cash Counter where people come 
    in to deposit Cash and withdraw Cash. Have an input panel to add people to Queue 
    to either deposit or withdraw money and dequeue the people. Maintain the Cash Balance.

 b. I/P -> Panel to add People to Queue to Deposit or Withdraw Money and dequeue

 c. Logic -> Write a Queue Class to enqueue and dequeue people to either deposit
             or withdraw money and maintain the cash balance */

var read = require('readline-sync');
var utility = require('./Utility');
var queue = new utility.QueueDemo();
console.log("                   Program of Queue Using LinkedList ");
var Balance = 20000;
console.log("Balance is : "+Balance);

var people = read.questionInt("Enter Person : ");

for(var i=1; i<=people; i++)
{
    queue.addPeople(i);
}

console.log("Person is : "+queue.displayPerson());

for(var i=1; i<=people; i++)
{
    let temp=0;
    temp=i;
    console.log("Person is "+i);
    console.log("current Balance : "+Balance);
    console.log("Press 1 for Withdraw Cash ");
    console.log("Press 2 for Deposit Cash ");
    console.log();
    var choice = read.questionInt("Enter People Choice : ");
    switch(choice)
    {
        case 1:
            console.log();
            console.log(" Your Operation is Withdraw Cash ");
            console.log("current Balance : "+Balance);
            console.log();
            var withdrawCash = read.questionInt(" Enter your Amount : ");
            if(withdrawCash < Balance)
            {
                Balance -= withdrawCash;
                queue.removePeople();
                console.log("Now People are : " +queue.displayPerson());
                console.log("current Balance : "+Balance);
                console.log();
            }
            else
            {
                console.log("current Balance : "+Balance);
                console.log("Amount should be less than Balance . ");
                i=temp;
            }
            break;
        
        case 2:
            console.log();
            console.log(" Your operation is Deposit cash ");
            console.log("current Balance : "+Balance);
            console.log();
            var depositCash = read.questionInt("Enter your Amount : ");
            Balance = Balance+depositCash;
            queue.removePeople();
            console.log("Now People are : "+queue.displayPerson());
            console.log("Current Balance : "+Balance);
            break;
            default:
                console.log("Enter valid your choice ");
                i=temp;
    }
}

