const sumArray=(numbers:number[]):number=>{
    let sum:number =0;
    for(let i=0;i<numbers.length;i++){
        sum =sum+numbers[i]
    }
    return sum;
}

const Aray:number[]=[2,5,8,10];
console.log(sumArray(Aray))