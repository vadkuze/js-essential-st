/* 

10 типов структур данных https://habr.com/ru/company/netologyru/blog/334914/

Object 

Map

Set

*/

let cat = {
    name: "Bob",
    age: 10,
    isRed: true,
    packs: [1,2,3,4,5],
    info: {
        locate: 'Kharkiv',
        owner: 'Dima'
    }
};

let cat2 = cat;

cat['isRed'] = false;
delete cat.age;
console.log(cat.age);

cat.age = 11;

if(cat['isRed']) {
//  ...
}

console.log(cat.age);


let map = new Map();

map.set('name', 'Bob');
map.delete('name', 'Bob');
map.set(true, 'isRed');
map.set(cat, 'CAT');

console.log(map.has('name'));
console.log(map.has(cat2));

let set = new Set();

set.add(1)
set.add(2)
set.add(2)
set.add(2)
set.add(cat)
set.add(cat)


console.log(set);


// let str = "Hello World h!"
// let filteredStr = '';
// let lettersSet = new Set();

// // console.log(str.split(''));
// for (let index = 0; index < str.length; index++) {
//   const word = str[index];
//   lettersSet.add(word.toLowerCase())
// }

// console.log(Array.from(lettersSet).join(''));'


/*

Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


*/


function twoSum(nums, target) { 

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];

        if(map.has(element)) {
            return [ map.get(element) ,i]
        }

        map.set(target - element, i);

    }

    return [-1, -1];
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));


// function test() {

//     if(a > 0) {
//         return 1
//     }

//     return 0;
// }