var read = require('readline-sync');

//Create Queue Class using Linkedlist

class QueueNode
{
    constructor(prime)
    {
        this.prime=prime;
        this.next=null;
    }
}
class QueueDemo
{
    constructor()
    {
        this.front=null;
        this.rear=null;
    }

//Add prime number
//@param prime take from user

    addPrime(prime)
    {
        var first = new QueueNode(prime);
        if(this.rear == null)
        {
            this.front=this.rear=first;
            return;
        }
        else
        {
            this.rear.next=first;
            this.rear=first;
        }
        
    }

    removePrime()
    {
        if(this.front == null)
        {
            return false;
        }
        var remove = this.front;
        this.front = this.front.next;
        
    }

//print AnagramPrime number 

    displayPrime()
    {
        var str = '';
        
        if(this.rear  == null )
        {
            return false;
        }
        var temp = new QueueNode()
        temp = this.front;
        while(temp!=null)
        {
                str = str + temp.prime + ' ';
                temp = temp.next;
    
        }
        return str;
        
    }

    

}
  
module.exports = 
{
    QueueDemo,
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
            
            return input;
            
        }
        
    },
    anagramNumber(num1,num2)
    {
       var number1 = num1.toString().split("");
       var number2 = num2.toString().split("");

       var length1 = number1.length;
       //console.log("length1 "+length1);
       
       
       var length2 = number2.length;
      // console.log("length2 "+length2);

      var n1 = this.bubbleSort(number1);
     // console.log(n1);
    
      var n2 = this.bubbleSort(number2);
      //console.log(n2);

       var count = 0;

           if(length1 != length2)
           {
               return false;
           }
           //console.log(length1);
           
            else
           {
               for(var i=0; i<length1; i++)
               {
                    for(var j=0; j<length1; j++,i++)
                    {
                        if(n1[i] === n2[j])
                        {
                            count++;
                        }
                    }
               } 
               //console.log("count "+count);      
               if(count == number1.length)
               {
                   return true;
               }
               else
               {
                   return false;
               }
            }
        
           
    },
    bubbleSort(arr)
    {
        var temp=0;
        
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
       // console.log(arr);

        return (arr);
    },
}