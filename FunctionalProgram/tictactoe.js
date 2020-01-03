console.log("                             Programm of Tic Tac Toe ");
console.log();

var utility = require('./Utility');
var readline = require('readline-sync');

var count=0;
var move=Math.random()*3;
console.log("Move Is : "+move);

if(move>0.5)
{
    move++;
    count++;
}
else
{
    move =0;
    count=0;
}

var ticTacArray=
[
    ["*","*","*"],
    ["*","*","*"],
    ["*","*","*"],
];

//console.log(ticTacArray.join("\n"));

console.log();
console.log("Welcome to play Tic Tac Toe");
console.log();
console.log(" Print Tic Tac Toe Board ")
utility.printBoard(ticTacArray);

if(move>=1)
{
    utility.playerMove(ticTacArray,move,count);
}
else
{
    
   utility.autoPlay(ticTacArray,move,count);
}