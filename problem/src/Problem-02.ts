const removeDuplicates=(arrayOfnumbers:number[]):number[]=>{
    const newArray:number[]=[];
    for(let i=0;i<arrayOfnumbers.length;i++){
        if(!newArray.includes(arrayOfnumbers[i])){
            newArray.push(arrayOfnumbers[i])
        }
    }
    return newArray
}

const aray:number[]=[10,20,30,20,50,30]

console.log(removeDuplicates(aray))