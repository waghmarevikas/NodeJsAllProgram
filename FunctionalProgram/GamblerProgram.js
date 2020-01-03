var utility = require('./Utility');
var input = require('readline-sync');

var stake = input.questionInt("Enter Stake : ");
var goal = input.questionInt("Enter Goal : ");
utility.gamblerProgram(stake,goal);