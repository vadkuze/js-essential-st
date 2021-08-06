// let number = -10;

// if(number > 0 ) {
//     console.log('Число больше нуля');
// } else if(number < 0) {
//     console.log('Число меньше нуля');
// } else {
//     console.log('0');
// }

const ADMIN_PASS = 'qwerty';
const ADMIN_LOGIN = 'admin';


let login = prompt('Login?');

login = login?.toLowerCase();

if(login === null) {
    console.log('Вы отказались');
}
else if(login === ADMIN_LOGIN) {
    let password = prompt('Password?');
    
    if(password === null) {
        console.log('Вы отказались');
    } else if(password === ADMIN_PASS) {
        console.log('Добро пожаловать на админ страницу!');
    } else {
        console.log('Неверный пароль');
    }

} else if(login === 'guest'){
    console.log('Добро пожаловать на гостевую страницу!');
} else {
    console.log('Мы Вас не знаем!');
}
