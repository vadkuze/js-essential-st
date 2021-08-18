let arr = ['Hi', 'World', '!'];

let [first, ...rest] = arr;


console.log(first);
console.log(rest);

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

const { age, name: userName } = cat;

// console.log(age, userName);
let nums = [1,2,3,4]
console.log(Math.max(...nums));

function max(...numbers) {
console.log(numbers);
}

console.log(max(1,3,8,2,80));

let cat2 = {
    name: "Sam",
    ...cat.info
}

console.log(cat2);