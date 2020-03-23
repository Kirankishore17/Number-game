let answer = Math.floor(Math.random() * 100 ) + 1;

let count = 1;

const guess = document.querySelector('.previous');
const display = document.querySelector('.display');
const result = document.querySelector(".result");
const attempt = document.querySelector(".attempts-left");

const submit = document.querySelector(".submit");
const field = document.querySelector(".field");

attempt.textContent  =  'Attempts left: ' + 10;
function checkNumber(){
    let userInput = Number(field.value);
    attempt.textContent = 'Attempts left: ' + (10 - count);
    if(count === 1) {
        guess.textContent = 'Previous attempts: ';
        gameover();
    }
    guess.textContent += userInput + ' ';

    if(userInput === answer) {
        display.textContent = '';
        result.textContent = 'Congrats!! you got it right!!';
        field.disabled = true;
        attempt.textContent = '';

        gameover();
    } else if(count === 10) {
        result.textContent = 'Game Over.';

        gameover();
    } else {
        display.textContent = 'Wrong guess';
    }
    count++;
}

function gameover() {
    console.log('ans:' + answer);
}

submit.addEventListener('click', checkNumber);