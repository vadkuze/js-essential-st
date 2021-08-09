let capSize = prompt('Введите 1 - мал 2 - ср 3 - бол ');
let cost = 0;

switch(capSize) {
    case '1': {
        cost += 5;
    } break;
    case '2': {
        cost += 10;
    } break;
    case '3': {
        cost += 15;
    } break;
    default: {
        console.log('Выберите правильный вариант');
    }
}

if(cost) {
    console.log(`Вы выбрали ${ capSize === '1' ? 'маленькую' : capSize === '2' ? 'среднюю' : 'большую' } чашку. Стоимость ${cost}$ `);
}

// let a = 10;
// let result = a > 0 ? 'a > 0' : 'a <= 0';
// // логическое выражение ? true : false


// switch(typeOfCoffee) {
//    case 'raf': 
//    case 'flat wite': {
//     cost += 30
//    }
// }
