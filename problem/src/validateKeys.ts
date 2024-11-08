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



const validateKeys=<T extends object>(obj: T, keys: (keyof T)[]):boolean=>{
  return keys.every(key => key in obj); 

}
const persons = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(persons, ["name", "email"]));