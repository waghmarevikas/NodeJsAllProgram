var utility = require('../DeQueue');
var read = require('readline-sync');
var dequeue = new utility.DequeueDemo();
var uti = require('./Utility');
var word = read.question("Enter to check whether string is palindrom or not ");
//var pali = uti.checkPalindromeWord(word)
//var bal = uti.balancedPara(word)
// console.log("Given String is "+uti.checkPalindromeWord(word));
// var ds = uti.dis();
// console.log("Display front is : "+ds);
//console.log("Remove Front "+uti.rvmFront());
var wordArray = word.split('');
for (let i = 0; i < wordArray.length; i++) 
{
    dequeue.addRear( wordArray[i]);
    
}
console.log("Display Rear : " + dequeue.displayRear());
console.log(`Display Front : ${dequeue.displayFront()}\n`);
if(dequeue.displayRear() === dequeue.displayFront()){
    console.log('Strings are palindrome');
    
}
else{
    console.log('Strings are not palindrome');
    
}


