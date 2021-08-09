/* 

for («initialization»; «condition»; «post_iteration») {
     «statements»
}

The first line is the head of the loop and controls how often the body (the remainder of the
loop) is executed. It has three parts and each of them is optional:

• initialization: sets up variables, etc. for the loop. 
  Variables declared here via let or const only exist inside the loop.

• condition: This condition is checked before each loop iteration. If it is falsy, the loop stops.

• post_iteration: This code is executed after each loop iteration.

*/

// let sum = 0;
// for(let i = 1; i <= 100; i++ ) {
//   if( i % 11 === 0 ) {
//     console.log(i);
//     sum +=i;
//   }

//   if(i === 50) {
//     break;
//   }

// }

// console.log(sum);


// let str = '';

// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     // str += ` [${i}-${j}] `;

//     if( i === j || i === 0 || i === 9 || j === 0 || j === 9) {
//       str += '*';
//     } else {
//       str += ' ';
//     }
//   }

//   str += '\n';
// }

// console.log(str);


let str = "Hello World h!"
let filteredStr = '';

// console.log(str.split(''));
for (let index = 0; index < str.length; index++) {
  const word = str[index];
  
  if(!(filteredStr.includes(word.toLowerCase()) || filteredStr.includes(word.toUpperCase()))) {
    filteredStr += word;
  }
}

console.log(filteredStr);