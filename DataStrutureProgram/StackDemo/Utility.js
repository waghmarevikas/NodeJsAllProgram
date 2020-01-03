class Node
{
    constructor(top)
    {
        this.top = top;
    }
}

//****************************************** Create Class Stack ****************************

class StackDemo
{
    constructor()
    {
        this.top = -1 ;
        this.stack = new Array();
        this.size=0;
    }

//******************************************* Push Element in Stack **************************
//@param data is take from user.

    
    push(data)
    {
        console.log("Data "+data)
        if(this.top == -1)
        {
            this.stack[++this.top] = data;
            console.log("Stack is "+this.stack[this.top])
            this.size++;
            return true

        }
        else
        {
            this.stack[++this.top] = data;
            this.size++;
        }

    }

//****************************************** Stack is Empty Or Not ***************************

    isEmpty()
    {
        if(this.top == -1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

//****************************************** Display all stack element ************************

    display()
    {
        var data = ' ';
        if(this.top == -1)
        {
            return false;
        }
        else
        {
            for(var i=0; i<=this.top; i++)
            {
                data = data+this.stack[i]+" ";
            }
            return data;
        }
        
    }
//******************************************* Delete Element ***********************************

    pop()
    {
        if(this.top == -1)
        {
            return false;
        }
        else
        {
            this.stack[this.top--];
            //this.top--;
           // this.size--;
            return true;
        }
    }

//***************************************** Peek Element *****************************************

    peek()
    {
        return (this.stack[this.top]);
    }

    //*******************************Balenced Paramiter************************
    //@param exp take from user

    balancedPara(exp)
    {
    
        for(var i=0;i<exp.length;i++)
        {
            var ch=exp.charAt(i);
            console.log("Exp "+exp.charAt(i))
            
            if(ch=="{" || ch=="[" || ch=="(")
            {
                this.push(ch);
               
            }
            if(ch=="}" || ch=="]" || ch==")")
            {
                this.pop();
                this.size--;
            }

        }
        if(this.size == 0)
        {
            return true;
        }
        else
        {
            return false;
        }
   
     }
     matchExp(ch1, ch2)
     {
        if(ch1 == '(' && ch2 == ')')
        {
            return true;
        }
        if(ch1 == '[' && ch2 == ']')
        {
            return true;
        }
        if(ch1 == '{' && ch2 == '}')
        {
            return true;
        }
        return false;
     }
    


}

module.exports = 
{
    StackDemo
}
