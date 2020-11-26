let tryCount ;
let secret;

let qSign = document.querySelector('h2 + div');
let tryOutput = document.querySelector('p > output');
let answerOutput = document.querySelector('button + output');
let newGameBtn = document.querySelector('output + button');
let gameDiv = document.querySelector('.gameDiv');
let btn = document.querySelector('button');

function startGame(){

    tryCount = 10;

    newGameBtn.classList.remove('d-block');
    newGameBtn.classList.add('d-none');
    userNumber.value = '';

    gameDiv.classList.remove('d-none');
    gameDiv.classList.add('d-block');

    btn.classList.add('d-none');

    qSign.classList.remove('d-none');
    qSign.innerHTML = '?';

    secret = getSecretNumber();

    tryOutput.innerHTML = tryCount;
    console.log(tryCount);
}

function getSecretNumber(){
    let secretNumber = Math.round(Math.random() * 100) + 1;
    return secretNumber;
}

function playGame(){

    if(tryCount > 0){
        tryOutput.innerHTML = tryCount;

        let userValue = userNumber.value;

        if(secret < userValue){
            answerOutput.innerHTML = `Ваш вариант ${userValue} больше моего числа.`;
        } else if(secret > userValue){
            answerOutput.innerHTML = `Ваш вариант ${userValue} меньше моего числа.`
        } else if (secret == userValue){

            answerOutput.innerHTML = `Вы угадали, я загадал число ${userValue}`;
            qSign.innerHTML = secret;
            let newGameBtn = document.querySelector('output + button');
            newGameBtn.classList.remove('d-none');
            newGameBtn.classList.add('d-block');
        }

        tryCount--;

    } else {

    }
    
}