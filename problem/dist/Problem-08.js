"use strict";
// class T{
//     name:string;
//     age:number;
//     email:string;
//     constructor(name:string,age:number,email:string){
//        this.name=name;
//        this.age=age;
//        this.email=email 
//     }
// }
const validateKeys = (obj, keys) => {
    return keys.every(key => key in obj);
};
const persons = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(persons, ["name", "age"]));
