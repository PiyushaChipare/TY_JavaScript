var car=
{
    cName:"nexon",
    price:1800000,
    fule:"electric",
    seatCount:4,
    dist:50,
    rpk:60,
    models:['topMost','2ndModel','oldModel'],
    wage:function()
    {
        return this.dist*this.rpk;
    },
        carDrive:{
            dName:'xyz',
            experience:10,
            license:true,
            age:35,
            salary:0
        }
    
}
car.carDrive.salary=car.wage()
console.log(car.carDrive.salary);
car.Ownername='GirishKumar'
console.log(car);
delete car.Ownername;
console.log(car);