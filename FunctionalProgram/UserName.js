var utility = require('./Utility');
var input = require('readline-sync');
var name = input.question('Enter Your Name : ');
console.log(name);
utility.userName(name);
