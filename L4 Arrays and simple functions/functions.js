/* 

-- The following code shows three ways of doing (roughly) the same thing: creating an ordinary function.
   
    // Function declaration (a statement)
    function ordinary1(a, b, c) { 
        // ···
    }

   // const plus anonymous function expression
    const ordinary2 = function (a, b, c) { 
        // ···
    };

   // const plus named function expression
    const ordinary3 = function myName(a, b, c) { 
        // `myName` is only accessible in here
    };

-- Arrow functions were added to JavaScript for two reasons:
    1. To provide a more concise way for creating functions.
    2. To make working with real functions easier: You can’t refer to the this of the sur-
    rounding scope inside an ordinary function.

-- A callback or callback function is a function that is an argument of a function or method call.
*/

//ordinary function 

// let result = add(10, 12);

// console.log(result);
// console.log(add(1, 1));

function add(x, y) {
    // let x = 10, 
   return x + y;
}

function multiply(x, y) {
    // let x = 10, 
   return x * y;
}


// arrow

// const add = (x, y) => x + y;

// console.log(add(1, 1));

function calc(operatorFn, x, y) {
    return operatorFn(x,y);
}

console.log(calc(add, 10, 12));
console.log(calc(multiply, 10, 12));

let result = calc( (x,y) => x - y, 12, 10);

console.log(result);

