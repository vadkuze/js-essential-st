/*
Ordinary functions can be both methods and real functions. Alas, the two roles are in conflict:
• As each ordinary function can be a method, it has its ownt his.
• The own this makes it impossible to access the this of the surrounding scope from
inside an ordinary function. And that is inconvenient for real functions.

The following code demonstrates the issue:

const person = { name: 'Jill', someMethod() {
const ordinaryFunc = function () { assert.throws(
() => this.name, // (A)
           /^TypeError: Cannot read property 'name' of undefined$/);
       };
const arrowFunc = () => { assert.equal(this.name, 'Jill'); // (B)
};
       ordinaryFunc();
       arrowFunc();
     },
}   
In this code, we can observe two ways of handling this:
    • Dynamic this:InlineA,we try to access the this of .someMethod()from an ordinary function. 
There, it is shadowed by the function’s own this, 
which is undefined (as filled in by the function call). 
Given that ordinary functions receive their this via (dynamic) 
function or method calls, their this is called dynamic.
    • Lexical this:InlineB,we again try to access the this of. someMethod().This time, we succeed because the arrow function does not have its own this. 
this is resolved lexically, just like any other variable. 
That’s why the this of arrow functions is called lexical.
*/
// let cat2 = {
//     name: 'Sam',
// }

// let cat3 = {
//     name: 'Joe',
// }

// let cat = {
//     name: "Bob",
//     age: 10,
//     isRed: true,
//     packs: [1,2,3,4,5],
//     friends: [cat2, cat3],
//     info: {
//         locate: 'Kharkiv',
//         owner: 'Dima'
//     },
//     // callFriends() {
//     //     this.friends.forEach(function(cat) {
//     //         console.log(`${this.name} is gonna walk with ${cat.name}` );
//     //     })  
//     // }
//     callFriends() {
//         this.friends.forEach((cat) => {
//             console.log(`${this.name} is gonna walk with ${cat.name}` );
//         })  
//     }
// };

// cat.callFriends()

// function filterWordCase(string, actionFn) {
//     return [].filter.call(string, actionFn).join('');
// }

// console.log(filterWordCase('ForEsT', (letter) => letter === letter.toUpperCase()));

// function run() {
//     console.log(`${this.name} is running`);
// }

// cat.run = cat2.run = run;

// // run()
// cat.run();
// cat2.run();

let arr = [1,2,3,4];

console.log(arr.__proto__);
console.log([null, false].__proto__);


// function Box(h,w) {
//     // this = {};
//     // this.__proto__ = Box.prototype;
    
//     this.height = h;
//     this.width = w;

//     // return this
// }
// Box.prototype.custom = function() {
//     // ...
// }
// let box = new Box(10, 20);
// let box2 = new Box(10, 20);

// console.log(box);
