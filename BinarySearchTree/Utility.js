module.exports =
{
    factorial(no)
    {
        var fact =1;
        for(let i=1;i<=no;i++)
        {
            fact=fact*i;
        }
        return fact;
    },
    binaryTree(node)
    {
        var number=(Math.floor(this.factorial(2*node))/(this.factorial(node+1)*this.factorial(node)));
        return number;
    },
}