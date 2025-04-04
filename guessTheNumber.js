let randomNumber = parseInt(Math.random()*100 +1);
const submit=document.querySelector('#subt');
const UserInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[]
let numGuess=1;

let playGame = true;

if(playGame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(UserInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess)
{
 if(isNaN(guess))
 {
    alert('Plase enter a valid number')
 }
 else if(guess<1)
 {
alert('Plase enter a number more then 1')
 }
 else if(guess>100)
 {
alert('Plase enter a number less then 100')
 }
 else{
    prevGuess.push(guess)
    if(numGuess === 11)
    {
        displayGuess(guess)
        displayMessage(`Game Over.Random number was ${randomNumber}`)
        endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
 }
}

function checkGuess(guess)
{
 if(guess === randomNumber)
 {
    displayMessage('you guessed it right')
    endGame()
 }
 else if (guess < randomNumber)
 {
    displayMessage(`Number is to low`)
 }
 else if (guess > randomNumber)
 {
    displayMessage(`Number is to High`)
 }
}

function displayGuess(guess)
{
 UserInput.value=''
 guessSlot.innerHTML+=`${guess}, `
 numGuess++;
 remaining.innerHTML= `${11-numGuess}`
}

function displayMessage(message)
{
 lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame()
{
    UserInput.value=''
    UserInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame()
{
    const newGameButtom = document.querySelector('#newGame')
    newGameButtom.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100 +1);
        prevGuess=[]
        numGuess=1;
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`;
        UserInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame=true;
    })
}