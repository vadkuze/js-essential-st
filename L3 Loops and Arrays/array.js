let arr = [1, 2, 'str', false];


// console.log(arr[0]);
// console.log(arr[arr.length - 1]);

let arr2 = arr.slice();
// Adding
arr2.push(true);
arr2.unshift(true);

console.log('arr2', arr2);

// Removing
arr2.pop();
arr2.shift();

// console.log('arr', arr);
console.log('arr2', arr2);

let arrayOfNumbers = [-10, 0, 20, 3, -17];
let sum = 0;
let min = arrayOfNumbers[0];


for (let index = 0; index < arrayOfNumbers.length; index++) {
    let element = arrayOfNumbers[index]; // arrayOfNumbers[0] => - 10 ...
    
    if(element % 2 === 0) {
        console.log(element);
    }

    sum += element;

    if(min > element) {
        min = element;
    }
}

console.log(sum);
console.log('min', min);
