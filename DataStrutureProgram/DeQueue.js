class NodeDeQueue
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
        this.prev = null
    }
}

class DequeueDemo
{
    constructor()
    {
        // this.data = data;
        // this.next = null;
        // this.prev = null
        this.front = null;
        this.rear = null;
    }
    isEmpty()
    {
        if(this.front==this.rear==null)
        {
            return true;
        }
        else
        {    
            return false;
        }
    }
    addFront(data)
    {
        var nodeFront = new NodeDeQueue(data);
        if(this.front==null)
        {
            this.front = this.rear = nodeFront;
           
        }
        else
        {
            nodeFront.next = this.front;
            this.prev = nodeFront;
            this.front = nodeFront;
        }
    }
    addRear(data)

    {
        var nodeRear = new NodeDeQueue(data);
        if(this.front==null)
        {
           this.front=nodeRear;
            this.rear=nodeRear;

        }
        else
        {
            this.rear.next = nodeRear;
            nodeRear.prev = this.rear;
            

        }
        this.rear = nodeRear;
    }
    removeFront()
    {
        if (this.front == null)
        {
            return false;
        }
        if (this.rear == this.front) 
        {
            let data = this.rear.value;
            this.rear = null;
            this.front = null;
            return data;
        }
        else 
        {

            let data = this.front.value;
            console.log("Data is "+data)
            let temp = this;
                while (temp.next != this.front) 
                {
                    temp = temp.next;
                }
                this.front = temp;
                this.front.next = null;
                return data;
         }
    }
    removeRear()
    {
            if (this.rear == null) 
            {
                return false;
            }
            if (this.rear == this.front) 
            {
                let data = this.rear.value;
                this.rear = null;
                this.front = null;
                //console.log(data);
                return data;
            }
            else
            {
                let data = this.rear.value;
                this.rear = this.rear.next;
                return data;
            }
    }
    
    displayFront()
    {
        var temp = this.front;
        var str = "";
        while(temp != null)
        {
            str += temp.data;
            temp = temp.next;
        }
        return str;
    }
    displayRear()
    {
        var temp=this.rear;
        var str="";
        while(temp!=null)
        {
            str+=temp.data;
            temp=temp.prev;
        }
        return str;

    }
}

module.exports = 
{
    DequeueDemo
}