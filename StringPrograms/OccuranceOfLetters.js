var n='Testyantra'
n=n.toLowerCase();
var o=[]
for(var i=0;i<n.length ; i++)
{
    o[i]=n.charAt(i);
}
console.log(o)
for(var i=0;i<o.length;i++)
{
    for(var j=i+1;j<o.length;j++)
    {
        if(o[i]==o[j])
       { o[j]='';}
    }
}
for (let i = 0; i <o.length; i++)
 { var count =0;
    if(o[i]!='')
    {
     for (let j = i; j < o.length; j++) 
     {
        if(o[i]==n.charAt(j))
        {
            count++;
        }
     }   
     console.log(o[i]+' '+count)
    }
 }
//console.log(o)
console.log('done')
