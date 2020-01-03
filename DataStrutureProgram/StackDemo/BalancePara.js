console.log("\t\tThis program stack")
var utility = require('./Utility')
var read = require('readline-sync');
var stack = new utility.StackDemo();
console.log();

// console.log("Stack  is Empty : "+stack.isEmpty());
// console.log();

// console.log("Display Stack : "+stack.display());
// console.log();

//  Push Element in stack 

    var data = read.question('Enetr Data : ');
   
    //stack.push(data);

    //console.log("Display"+stack.display());
    //stack.push(data);

// console.log();
//  console.log("Display Stack : "+stack.display());
//  console.log();

// //console.log("Delete last Element : "+stack.pop());
// console.log();

//  console.log("Display Stack :  "+stack.display());
//  console.log();

// console.log("Peek Element from stack : "+stack.peek());
// console.log();

// console.log("Stack is Empty : "+stack.isEmpty());
// console.log();

console.log("Balanced "+stack.balancedPara(data));
//console.log("display"+stack.display());
