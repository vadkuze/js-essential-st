/* 
    --Array static methods--

    Array.isArray() ( vs typeof) 
    Array.from()
    Array.of()

    --Array prototype methods--
    Look attached pictures

*/

let numbers = [1,2,5,1,-9];

console.log( numbers.slice(0) );

let strings = ['hello', 'world', '!'];


let lengths = strings.map((str) => str.length);

console.log(lengths);

// function customMap(array, callbackFn) {
//     let newArray = [];

//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
        
//         newArray.push(callbackFn(element, index, array))
//     }

//     return newArray
// }

// console.log('customMap', customMap(strings, (str) => str.length));

let positiveNumbers = numbers.filter( function (value) {
    return value > 0;
})

// let positiveNumbers = numbers.filter( (value) => value > 0)
// console.log(positiveNumbers);


// let isOne = numbers.some( (value) => value === 1)

// console.log(isOne);


function double(numbers) {
    return numbers.reduce( (acc, n) => {
        acc.push(n * 2);
        return acc;
    }, [] )
}

console.log(double(numbers));
console.log(numbers.map(n => n*2));
