"use strict";
// class creating for car
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge(currentYear) {
        return currentYear - this.year;
    }
}
// new instance creating
const car = new Car('TOYOTA', 'CAMRY', 2014);
const carAge = car.getCarAge(2024);
console.log(`my cars age is ${carAge} years`);
