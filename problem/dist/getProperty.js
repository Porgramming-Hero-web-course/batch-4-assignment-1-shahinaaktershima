"use strict";
// type T={
//     name:string;
//     age:number;
// }
const getProperty = (obj, key) => {
    return obj[key];
};
const person = { name: "Alice", age: 30, phn: "0187982537466" };
console.log(getProperty(person, "phn"));
