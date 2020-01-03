var readline = require('readline-sync');
class QueueNode
{
    constructor(person)
    {
        this.person=person;
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

    addPeople(person)
    {
        var first = new QueueNode(person);
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

    removePeople()
    {
        if(this.front == null)
        {
            return false;
        }
        var remove = this.front;
        this.front = this.front.next;
        
    }

    displayPerson()
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
            
            
                str = str + temp.person + ' ';
                temp = temp.next;
        
            
        }
        return str;
        
    }

    depositCash()
    {

    }

    withdrawCach()
    {

    }

}

module.exports = 
{
    QueueDemo
}