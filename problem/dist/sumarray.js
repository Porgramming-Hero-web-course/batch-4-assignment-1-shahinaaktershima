"use strict";
const sumArray = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
};
const Aray = [2, 5, 8, 10];
console.log(sumArray(Aray));
