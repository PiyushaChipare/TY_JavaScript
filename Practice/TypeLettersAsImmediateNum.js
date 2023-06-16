let s="a3p2u1j1e4";
for (let i = 0; i < s.length; i++) 
{
    var letter=s.charAt(i);
    var num=s.charAt(i+1);
    for(let j=1;j<=num;j++)
    {
        console.log(letter+" "+j);
    }
}