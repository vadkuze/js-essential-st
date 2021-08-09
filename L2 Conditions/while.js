
// let count = 10;
// while(count--){
//     console.log(count);
// }


const COLOR = 'red';

let attempts = 3;

while(attempts) {
    let guessedColor = prompt('Enter the color');
    
    if(guessedColor === null) {
        alert('Canceled')
        break;
    }
   
    if(guessedColor === COLOR) {
        alert('Right');
        break;
    } else {
        alert(`Try one more time  Attempt ${--attempts}`);
    }
}