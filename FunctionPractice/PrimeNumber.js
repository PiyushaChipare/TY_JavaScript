function primeNumber(num)
{
    let count=0;
    for (let i = 1; i <=num; i++) 
    {
        if(num%i==0)
        {
            count++;
        }
    }   
    if(count==2)
        {
            return true
            console.log(num+"prime number ")
        }
    else
    {return false;}
}
count=0;
for (let j = 1; j <=100; j++) 
{
    
   if(primeNumber(j))
    {count++;
        console.log(j+" Prime "+count);
        
    }
}