var utility = require('../BinarySearchTree/Utility');
var read = require('readline-sync');
var node = read.questionInt("Enter number of nodes : ");
var tree = utility.binaryTree(node);
console.log("number of node s in Binary search tree : "+tree);