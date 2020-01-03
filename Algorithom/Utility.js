//var readline = require("readline-sync");


module.exports = 
{
    //***************Array Divide****************/
    //@param Larray is left side array part;
    //@param Rarray is right side array part;
    arrayLside(array)
    {
        //var array = [1,2,3,4,2,3,4,3,4,5];
        console.log(array);
        var Larray=[];
       
        var length =parseInt(array.length/2);
        console.log(length);
        for(var i = 0; i<length; i++) 
        {
            Larray[i] = array[i];
        }
        return Larray;
    },
    arrayRside(array)
    {
        var Rarray=[];
        var j=0;
        for(var i=parseInt(array.length/2);i<array.length;j++,i++)
        {
    
             Rarray[j]=array[i];
  
        }
        return Rarray;
    },
    mergesort(Larray,Rarray,array)
    {
        var i=0;
        var j=0;
        var sort = [];

        while(i<Larray.length || j<Rarray.length)
        {
            if(i===Larray.length)
            {
                sort.push(Rarray[j]);
			    j++;
            }
            else if (j===Rarray.length || Larray[i]<=Rarray[j])
            {
                sort.push(Larray[i]);
                i++;
                if(array.length === sort.length)
                {
                    i++;
                }
            }
            else
            {
                sort.push(Rarray[j]);
                j++;
            }
        }
        return sort;
    },

    //******************************************Insertion Sort**********************************
    
    insertionSort(arr)
    {
       // var arr=[20,54,65,20,3,29,1,30];
        var temp=0,j=0;
        console.log("Before insertion Sort Array Is: "+arr);
        for(var i=0; i<arr.length; i++)
        {
            temp=arr[i];
            j=i;
            while(j>0 && arr[j-1]>temp)
            {
                arr[j]=arr[j-1];
                j=j-1;

            }
            arr[j]=temp;
        }
        console.log("After Insertion Sort Array is: "+arr);

    },



}