let fuel;let price;let model; let colour;

function bike(fuel,price,model,colour)
{
    this.fuel=fuel;
    this.price=price;
    this.model=model;
    this.colour=colour;
}

let obj=new bike('pertol',70000,'2nd','red');
console.log(obj.colour+" "+obj.fuel+" "+obj.model+" "+obj.price);