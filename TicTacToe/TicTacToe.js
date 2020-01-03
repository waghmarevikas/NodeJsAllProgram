//******************************************* Program of Tic Tac Toe*************** */

const input = require('readline-sync');
let i,j,r=1,q=0,r1=1;
let size=3;


let board = new Array(size);
let showIndex = new Array(size);

console.log("Tic Tac Toe Board ");
console.log();

console.log("| 1 | | 2 | | 3 | ");
console.log("| 4 | | 5 | | 6 | ");
console.log("| 7 | | 8 | | 9 | ");

//**************************** Game start timeToplay Method *************/

timeToplay();

 function timeToplay()
{
    let move =0 , x=0, y=0, draw=0;
    let turn = true;

    indexe();
    initializeBoard();
    printBoard();
    var turnChar;
    do
    {
        if(turn)
        {
            try
            {
                console.log("Your Turn");
                move = input.questionInt("Enter Your Number.....");
                if (move<1 || move>9|| isNaN(move))
                {
                    turn = true;
                    throw "Invalid Input Please Check it....";
                }
                else if(occupied(move))
                {
                    turn = true;
                    throw "Possition Alredy is occupied ....";
                }
                else
                {
                    move= move-1;
                    x = (move / size | 0);
                    y = move % size ;
                    board[x][y]='X';
                    turn=false;
                    draw++;                    
                    
                    printBoard();
                    console.log();

                    if(checkWin('X'))
                    {
                        console.log("  You are Winner...");
                    }
                   turnChar = 'X';
                }
            }
            catch(e)
            {
              console.log(e);  
            }
        }
        else
        {
            move = (Math.random()*9|0);
            move = move-1;
            x=(move/size|0);
            y=move%size;

            if(board[x][y] == ' ')
            {

                console.log("Machine turn...");
                board[x][y]='O';
                turn=true;
                draw++;
                printBoard();
                console.log();

                if(checkWin('O'))
                {
                    console.log("  Machine Winner... ");
                }
                turnChar = 'O';
            }
            else
            {
                turn = false;
            }
        }
        if(draw == 9)
        {
            console.log();
            console.log("Drawed ");
        }
        
        
    }
    while(checkWin(turnChar) == false && draw !=9);
}

//************************* Initial Possiton Of board ******* */
function initializeBoard()
{
    let c=0; 
    for( i=0; i<board.length; i++)
    {
        board[i] = new Array(size);
        for(j=0; j<board.length; j++)
        {
            board[i][j] = ' ';
        }
    }
}

//**************************** print Board  */

function printBoard()
{
     console.log();
     console.log();
    for(i=0; i<size; i++)
    {
        for(j=0; j<1; j++)
        {
            console.log('| '+board[i][j] + ' | '+ board[i][j+1]+ ' | '+ board[i][j+2] + ' | '+'    ');
        }
     console.log();
    }

}

//**************************** Print Index******************** */

function indexe()
{
    let c=0;
    for(i=0; i<showIndex.length; i++)
    {
        showIndex[i] = new Array(size);
        for(j=0; j<size; j++)
        {
            showIndex[i][j]=r1++;
        }
    }
}

//**************************** Row Wise Checking ***********************

function rowWise(turnChar)
{
   
   
    for(i=0; i<size; i++)
    {
       
       
        if( (board[i][0]== turnChar && board[i][1]  == turnChar &&  board[i][2]) == turnChar){
       
            return (true);
        }
        
    }
  
    return (false);
}

//*************************************** Column Wise Checkin *************

function columnWise(turnChar)
{
    
    for(i=0; i<size; i++)
    {
        if( (board[0][i]== turnChar && board[1][i] == turnChar && board[2][i]) == turnChar){
            return (true);
        }
        
            
    }
   
    return (false);
}

//***************************************** Diagonal Wise Checking*********

function diagonalWise(turnChar)
{
    
    
    if((board[0][0] == turnChar && board[1][1] == turnChar && board[2][2]) == turnChar)
     return true;
    
   else if((board[0][2]== turnChar && board[1][1] == turnChar && board[2][0]) == turnChar)
     return true;

    return false;
}

//******************************** CheckWin is Check Row Column And DiagonalWise
function checkWin(turnChar)
{
    
    return( rowWise(turnChar) || columnWise(turnChar) || diagonalWise(turnChar) );
}

//******************************** Possition Occupied*************************

function occupied(move)
{
    move = move-1;
    x = ( move / size | 0);
    y = move % size;
    return (board[x][y] !=' ');
}