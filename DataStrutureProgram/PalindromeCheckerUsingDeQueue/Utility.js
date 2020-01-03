var dequeue = require('../DeQueue');
var dqu =new dequeue.DequeueDemo();
module.exports =
{
    
    checkPalindromeWord(word) 
    {


        var size = word.length;

        // Dequeue object created 
        //let dqu =new dequeue.DequeueDemo();
        // var ch = word.split(" ");

        for (let i = 0; i < size; i++) 
        {
            //To add element from rear
            //dqu.addRear(word[i]);
        }
        for(let j=0; j<size; j++)
        {
            dqu.addFront(word[j]);
        }
   
     },
     dis()
     {
        var front = dqu.displayRear();
        console.log("First "+front)
        var end = dqu.displayFront();
        console.log("Display Rear "+end);
     },
     rvmFront()
     {
        return dqu.removeFront();
     },  
     

}