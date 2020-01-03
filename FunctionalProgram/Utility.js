var readline = require("readline-sync");


module.exports = 
{
    //**********************************This Method Take input from the user**********************

    inputRead()
    {
        let input = readline.question("Enter User Input : ");
        return input;
    },

    //**********************************Leap Year *******************************
    //@param year is take input from user and ckeck it.

    leapYear(year)
    {
        
        
        var count=0;
        var format=/[0-9]/;
        var temp=year;
        while(format.test(temp!=0))
        {
            temp=parseInt(temp/10);
            count++;
        }
        console.log(count);
        if(count == 4)
        {
            if(year % 4 === 0 && (year % 100 !=0 || year % 400 ===0 ))
            {
                console.log("Is LeapYear");
            }
            else
            {
                console.log("Not LeapYear");
            }
        }
        else
        {
            console.log("Enter only Fourb Digit Year");
        }
    
   
    },

    //*********************************Flip Coin***************************
    //@param coin take from user
    flipCoin(coin)
    {
        var head=0,tail=0,header=0,tailes=0;
        var format=/[0-9]/;
        if(format.test(coin))
        {
            console.log("Start");
        
        for(var i=0; i<coin; i++)
        {
            if(Math.random()>0.5)
            {
                head++;
                //return head;
            }
            else
            {
                tail++;
                //return tail;
            }
        }
        console.log("Head is :"+head);
        console.log("Tail is :"+tail);
        var total=head+tail;
        header=(head*100/total);
        tailes=(tail*100/total);

        console.log("Percentage of Head :"+header);
        console.log("percentage of Tail :"+tailes);
    }
    else
    {
        console.log("Enter valid input ");
    }
    },

    //*******************************This program is Vending Machine************************
    //@param amount take from user

    vendingMachine(amount)
    {
       var i=0, total, countnotes=0;
        var Note=[2000,500,200,100,50,20,10,5,1];
        let format=/[0-9]/;
        
          //  if(amount/Note[i])
            //{
              //  total+=amount/Note[i];
                //console.log(Note[i]+"RS Nots :"+amount/Note[i]);
                //amount+=Note[i];
            //}
            //i++;
            
            //if(amount!=0)
           // {
                //console.log(vendingMachine(amount)); 
                
            //}
            //else

            //{
              //  console.log("Totle Notes of :"+total);
                
  
            //}
            if(format.test(amount))
            {
                for(var i=0; i<Note.length; i++)
                {
                    if(Note[i]<=amount)
                    {
                        if(amount>=1)
                        {
                            count = parseInt(amount/Note[i]);
                            amount = amount%Note[i];
                            console.log("Note of "+Note[i]+":"+count);
                            console.log(".");
                            total= total+parseInt(amount/Note[i]);
                        }
                     }
                }
                console.log("Totale Of Notes :"+total);
            }
            else
            {
                console.log("Enter Only Integer Formate ");
            }

    },

//**********************************Anagram String**********************
//@param str1 and str2 take from user

    anagramString(str1,str2)
    {
        var format = /[a-zA-Z]/;
        var result;
       console.log(str1);
       console.log(str2);

       var count=0;
       if(format.test(str1) && format.test(str2))
       {
           if(str1.length != str2.length)
           {
               console.log("String is not Anagram");
           }
           else
           {
               for(var i=0; i<str1.length; i++)
               {
                    for(var j=0; j<str2.length; j++)
                    {
                        if(str1[j].toLowercase == str2[i].toLowercase)
                        {
                            count++;
                            break;
                        }
                    }
               }       
               if(count == str1.length)
               {
                   console.log("String is Anagram");
               }
               else
               {
                   console.log("Not Anagram string");
               }
            }
        }
           else
           {
               console.log("Enter Only String Formate");
           }
    },

    //*************************************Coupon Code**************************

     couponCode()
     {
         var chars="vyygbvfaiytg783645871694368yuav98yy989q";
         var max=1000000;
         var randomno = parseInt(Math.random()*max);
        var sb = ' ';
        var  coupono = [];
        //console.log(coupono);
        //console.log(randomno);
         while(randomno>0)
         {
            sb=(chars[randomno%chars.length]);
            randomno = parseInt(randomno/chars.length);
            coupono.push(sb);
         }
        
         console.log("Coupon Code is :- "+coupono.join(""));
     } ,

     //******************************** Max Two Number******************************
     //@param Array take from user
     
     maxTwoNo(array)
     {
         var fmax=0;
         var smax=0;
         for(var i=0; i<array.length; i++)
         {
             if(fmax<=array[i])
             {
                 smax=fmax;
                 fmax=array[i];
             }
             else if (smax<=array[i])
             {
                 smax=array[i];
             }
         }
         console.log("First Max is :"+fmax);
         console.log("Second Max is :"+smax);
     },

//*****************************************Harmonic Series**************************
//@param input take from user

    harmonicSeries(input)
    {
        var format=/[0-9]/;
        if(format.test(input)){
        var sum = [];
        var i;
        console.log("Harmonic Series is : ");
        for( i=1; i <= input; i++)
        {
           
            sum = sum+(1/i);
            console.log(sum)
            
        }
    }
    else
    {
        console.log("Enter Valid input ");

    }

       
    },

//***************************************Bubble Sort*********************************
    
    bubbleSort(arr)
    {
        //var arr = [20,40,2,50,17,39,50];
        var temp=0;
        for(var i=0; i<arr.length; i++)
        {
            console.log("Array is: "+arr[i]);
        }

        for(var i=0; i<arr.length-1; i++)
        {
            for(var j=0; j<arr.length-1-i; j++)
            {
                if(arr[j]>arr[j+1])
                {
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }

        console.log("After Bubble Sort :"+arr);
    },

    //*********************************Insertion Sort****************************

   
    //**********************Binary Search**********************

    binarysearch(arr)
    {
       var readline = require("readline-sync");
       // var arr = [10,20,30,40,50,60];
        console.log("Array is : "+arr);
       let input = readline.question("Enter Nubmer For Search : ");
        
        var first=0;
        var last = arr.length;
        var mid = parseInt(first+last)/2;
        while(first<=last)
        {
            if(arr[mid]<input)
            {
                first = mid+1;
            }
            else if (arr[mid]==input)
            {
                console.log("Element is Presented ")
                console.log("Element "+arr[mid]+" Position is : "+mid);
                break;
            }
            else
            {
                last = mid-1;
            }
            mid = parseInt(first+last)/2;

        }
        
    },

//***********************Find Max Number From Array****************************
    maxNumber()
    {
        var arr=[23,45,67,34,32,87,68,90,45];
        var large=arr[0];
        for(var i=0; i<arr.length; i++)
        {
            if(large<arr[i])
            {
                large=arr[i];
            }
        }
        console.log("Large Elemet In giver Array is: "+large);
    },

//**********************************Repeat Number********************************

    repeatedNumber()
    {
        var arr=[2,4,3,2,2,3,4,5,7,5,6];
        for(var i=0; i<arr.length; i++)
        {
            for(var j=i+1; j<arr.length; j++)
            {  
                if(arr[i]===arr[j])
                {
                    
                    console.log("Repeated Number is: "+arr[i]);
                }
            }
        }
    },

    //*********************************Insertion Sort For String*************************

    insertionSortForString(str)

    {
        var arr = str.toString().split(" ");
        //var str2 = arr.split(" ");
    
        var temp =" ";
        for(var i=0; i<str.length; i++)
        {
            for(var j=i+1; j<str.length; j++)
            {
                if(arr[i]==(arr[j]))
                {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        console.log(arr.join(" "));
    },

    //**************************************Gambler Program*******************************

    gamblerProgram(stake,goal)
    {
        // var 
        ake=10;
        // var goal = 15;
        var bets=0;
        var wins=0;
        var trails = readline.questionInt("Enter trails : ");
        for(var i=0; i<trails; i++)
        {
            var cash=stake;
            if(Math.random()>0.5)
            {
                cash++;
            }
            else
            {
                cash--;
            }
            if(cash == goal)
            {
                wins++;
            }
            else
            {
                bets++;
            }
        }
        console.log(wins+" Wins of "+trails);
        console.log("Percentage of Games won ="+wins*100/trails);
        console.log("Avg # bets = "+1.0*bets/trails);
    },

    //*************************************Armstrong Number*********************************
    //@param input take from user

    armstrongNumber(input)
    {
        var sum=0, temp, rem,num=input;
        temp=input;
        while(num>0)
        {
            rem = num%10;
            sum=sum+(rem*rem*rem);
            num = parseInt(num/10);

        }
        if(temp==sum)
        {
            console.log(sum+" Is Number Armstrong.");

        }
        else
        {
            console.log("Number is Not Armstrong.");
        }
    },

//***************************************Prime Number****************************************
//@param input take from user

    primeNumber(input)
    {
        var count=0;
        for(var i=1; i<=input; i++)
        {
            if(input%i==0)
            {
                count++;
            }
        }
        if(count === 2)
        {
            console.log(input+" This are Prime Number");
            return input;
            
        }
        else
        {
            console.log("Not Prime Number");
            return false;
           
        }
    },

//**************************************check user Number***********************************
//@param num4 take from user
    checkYourNumber(num4)
    {
        var result = Math.pow(2,num4);
        var low =0;
        var high = parseInt(result);
        while(low!=high)
        {
            var mid = parseInt (result-low)/2;
            console.log("Enter Number Between "+low+" to "+high);
            console.log(mid);
            var readline = require('readline-sync');
            var c = readline.question("If your Number is Greatter than "+low+" to "+mid);
            if(c===1)
            {
                high=mid;
            }
            else if(c!=1)
            {
                low=mid+1;
            }
            else
            {
                console.log("Wrong Input");
            }
            console.log("Your Number is "+low);
        }
    },
//********************************Count Factorial*************************************
//@param input take from user

    countFactorial(input)
    {
        var fact=1;
        for(var i=1; i<=input; i++)
        {
            fact = fact *i ;
        }
        console.log("Factorial of given number is "+fact);

    },
//*************************************Fibonacci Series*****************************
//@param input take from user

    fibinacciSeries(input)
    {
        var n1=0, n2=1,n3;
        console.log(n1+" "+n2);
        for(var i=2; i<=input; i++)
        {
           // n3=n1+n2;
            console.log(n1+n2+" ");
            n1++;
            n2++;
            n1=n2;
            n2=n3;
        }
    },

//********************************Perfect Number*******************************
//@param input take from user
    
    perfectNumber(input)
    {
        var sum = 0;
        for(var i=1; i<input; i++)
        {
            if(input%i== 0)
            {
                sum = sum + i;
            }
        }
        if(sum==input)
        {
            console.log("Number Is Perfect : "+sum)
        }
        else
        {
            console.log("Not Perfect Number ");
        }
    },
//*********************************Palindrom Number**************************************
//@param input take from user

    palindromNumber(input)
    {
        var temp = 0; sum = 0;
        temp = input;
        while(input>0)
        {
            var rem = input % 10;
            sum = (sum*10)+rem;
            input = parseInt(input/10);
        }
        if(sum == temp)
        {
            console.log("Palindrom Number : "+ sum);
        }
        else
        {
            console.log("Not Palindrom Number ");
        }
    },

//*********************************Addition of Three Number is Zero**********************
//@param Array and Array size take from user

    addThreeZero(array,arrsize)
    {
        for(var i=0; i<arrsize-2; i++)
        {
            for(var j=i+1; j<arrsize-1; j++)
            {
                for(var k=j+1; k<arrsize; k++)
                {
                    if(array[i]+array[j]+array[k]==0)
                    {
                        console.log(array[i]);
                        console.log();
                        console.log(array[j]);
                        console.log();
                        console.log(array[k]);
                        console.log();
                        var sum =0;
                        sum = array[i]+array[j]+array[k];
                        console.log("Arrar[i]+Array[j]+Array[k] = "+sum);
                    }
                }
            }
        }
    },

    //****************************************** Print Prime Trangle
    //@param Take from user 

primeTrangle(number)
{
    var count = 2, j, k;
    var arr = new Array();
    for (var i = 0; i<number; i++)
    {
        for( j=number; j>i; j++)
        {
            arr[j]=" ";
        }
        console.log(arr[j]);
        for(k=1; k<=number; k++)
        {
            while(this.primeNumber(count))
            {
                console.log(count+" ");
                count++;
            }
            
            count++;
        }
    }


},


userName(name)
{
    var arr = ["Hello","<<username>> ,","How are you ? "];
    var count,i;
    for(i=0; i<arr.length; i++)
    {
        if(arr[i]=="<<username>> ,")
        {
            arr[i] = name;
        }
    }
    console.log(arr);
},

//******************************************MultiPlication Of 2D Array*******************************
//@Param ArrayA And ArrayB take from user
 
mul2DArray()
{
    var rowA = readline.question("Enter Row of Array A : ");
    var colA = readline.question("Enter Column of Array A : ");
    var rowB = readline.question("Enter Row of Array B : ");
    var colB = readline.question("Enter Column of Array B : ");
    var arrayA = new Array();
    var arrayB = new Array();
    var sumArray = new Array();
    var i,j,count=0;
    for(i=0; i<rowA; i++)
    {
        arrayA[i] = new Array(colA);
        for( j=0; j<colA; j++)
        {
            arrayA[i][j]=readline.question("Enetr Element of Array A : ");
        }
    }
    for( i=0; i<rowA; i++)
    {
        arrayB[i] = new Array(colB);
        for(j=0; j<colA; j++)
        {
            arrayB[i][j] = readline.question("Enter Element of Array B : ");
        }

    }
    count=0;
    for(i=0; i<rowA; i++)
    {
         sumArray[i] = new Array(colB);
        for(j=0; j<colB; j++)
        {
            for(var k=0; k<colB; k++)
            {
                count = count + arrayA[i][k]*arrayB[k][j];
            }
                console.log(count);
                sumArray[i][j] = count;
                count=0;
        }
    }
        console.log(arrayA.join("\n"));
        console.log();
        console.log(arrayB.join("\n"));
        console.log();
        console.log("Multyplication of Arrar A & B is : ")
        console.log(sumArray.join("\n"));

},

 //********************************* Stop Watch *********************
 stopWatch()
 {
        var start = new Date().getSeconds()%1000
        console.log(" Start Time Take From System is : "+start);
        var read = require('readline-sync');
        var kay = read.question("Enter any kay : ");

        var stop = new Date().getSeconds()%1000
        console.log("Time to Stop is : "+stop);
        console.log("Time is : "+parseInt(stop-start));
 } ,

}

    









