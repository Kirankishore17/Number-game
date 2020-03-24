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
    if(isNaN(userInput)){
        field.value += ' - invalid input';
        display.textContent = 'Oops !!!';
        gameover();
    }else{

        if(count === 1) {
            guess.textContent = 'Previous attempts: ';
        }
        guess.textContent += userInput + ' ';

        if(userInput === answer) {
            display.textContent = '';
            result.textContent = 'Congrats!! you got it right!!';
            gameover();
        } else if(count === 10) {
            result.textContent = 'Game Over.';
            gameover();
        } else {
            display.textContent = 'Wrong guess, ';
            if(userInput < answer){
                display.textContent += ' try larger value.';
            }else {
                display.textContent += ' try smaller value.';
            }

        }
        field.value = '';
        count++;
        }
}

function gameover() {
    
    field.disabled = true;
    submit.disabled = true;
    attempt.textContent = '';
    reset = document.createElement('button');
    reset.textContent = 'New Game';
    document.body.appendChild(reset);
    reset.addEventListener('click', resetGame);
}

function resetGame() {
    count = 1;
    parm = document.querySelectorAll('.input-section p');
    for(var i=0; i<parm.length; i++){
        parm[i].textContent = '';
    }
    field.disabled = false;
    submit.disabled = false;

    attempt.textContent  =  'Attempts left: ' + 10;
    reset.parentNode.removeChild(reset);
    field.focus();
    field.value = '';

    answer = Math.floor(Math.random() * 100 ) + 1;
}
// console.log('ans:' + answer);

submit.addEventListener('click', checkNumber);
field.addEventListener('keypress', function(event) {
    if(event.keyCode == 13) {
        checkNumber();
    }
})