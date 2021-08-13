/*

O(1) Константная сложность

function getLastItem(array) {
    return array[array.length - 1];
}

 
O(n) Линейная сложность

Данные | К-во операций
10     | 10
10 000 | 10 000

let sum = 0;
for (let index = 0; index < array.length; index++) {
    let element = array[index];

    sum += element;
}



O(log n) Логарфмическая сложность

Данные | К-во операций
100    | 7
10 000 | 14

- Пример со словарем

let nums = [-1,2,5,6,8,99,976];
function binarySearch(array, target) {
    let left = 0,
        right = array.length - 1,
        mid;

    while(left <= right) {
        mid = Math.round( ((right - left)/2) + left );

        if(target === array[mid]) {
            return mid;
        } else if(target < array[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}
binarySearch(nums, 976)




O(n ^ 2) Квадратичная сложность

Данные | К-во операций
10     | 100
10 000 | 100 000 000

let str = '';

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    str += ` [${i}-${j}] `;
  }

  str += '\n';
}




O(n ^ 3) Кубическая сложность

Данные | К-во операций
10     | 1 000
10 000 | 1 000 000 000 000

for
    for
        for


O(2 ^ n) Экспоненциальная сложность

Данные | К-во операций
10     | 1 024
20     | 1 048 576


function getFibonacci(n) {
    if(n < 2) {
        return n
    }

    return getFibonacci(n - 1) + getFibonacci(n - 2)
}

O(n!) Факториальная сложность

3!  - 6
6! - 720
50! - 3.04140932  * 10^64

200! - ???



Отбрасывание констант

- O(2n) => O(n)

for
    ...
for
    ...


- O(n + n^2) => O(n^2)

for
    ...

for
    ...
    for
        ...


- O(10 * 2^n + 2 * 10^100 ) => O(2^n + n^100) => O(2^n)

- O(n^2 + k) => O(n^2 + k)


Сложность по памяти 

Копирование массива это уже O(n)


*/






