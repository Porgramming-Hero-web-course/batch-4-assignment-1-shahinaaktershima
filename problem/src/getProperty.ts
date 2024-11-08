// type T={
//     name:string;
//     age:number;
// }
const getProperty=<T, K extends keyof T>(obj: T, key: K): T[K]=>{
    return obj[key];
}
const person = { name: "Alice", age: 30,phn:"0187982537466" };
console.log(getProperty(person,"phn"));