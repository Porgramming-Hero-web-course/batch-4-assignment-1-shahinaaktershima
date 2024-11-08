// class creating for car
class Car {
    make:string;
    model:string;
    year:number;
    constructor(make:string,model:string,year:number){
        this.make=make;
        this.model=model;
        this.year=year
    }

    getCarAge(currentYear:number):number{
        return currentYear-this.year
    }
}

// new instance creating
const car= new Car('TOYOTA','CAMRY',2014);
const carAge= car.getCarAge(2024);
console.log(`my cars age is ${carAge} years`)