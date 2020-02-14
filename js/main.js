/*----- app's state (variables) -----*/

let currentBalance;
let currentBet;
let currentSelection;
let currentWinner;

/*----- cached element references -----*/

let resetGame = document.getElementById('resetwheel');
let spinWheel = document.getElementById('spinwheel');
let wheelResult = document.getElementById('wheel');

/*----- event listeners -----*/

document.getElementById('placebet').addEventListener('click', adjustBalance);
document.querySelector('.gameboard').addEventListener('click', boardSelection);
resetGame.addEventListener('click', reset);
spinWheel.addEventListener('click', getNumber);

/*----- functions -----*/

init();

function init(){
    currentBalance = 1000;
    currentBet = enterbet.value;
    statusmessage.innerHTML = `Place your bets!!!`;
    statusmessage.style.backgroundColor = 'black';
    statusmessage.style.color = 'gold';
    enterbet.value = '';
    wheelResult.innerHTML = '';
    render();
};

//adjusts balance based on bet and displays messages based on values
function adjustBalance(){
    if (currentBalance > 0 && currentBalance >= parseInt(enterbet.value)){
        currentBalance -= parseInt(enterbet.value);
        if (currentBalance === 0){
            statusmessage.style.color = 'gold';
            statusmessage.style.backgroundColor = 'black'
            statusmessage.innerHTML = `You're out of money!`;
        }else if (parseInt(enterbet.value) > parseInt(currentBalance)){
            statusmessage.style.color = 'gold';
            statusmessage.style.backgroundColor = 'black'
            statusmessage.innerHTML = `You don't have enough money to make that wager again!`
        }else{
            statusmessage.style.color = 'gold';
            statusmessage.style.backgroundColor = 'black'
            statusmessage.innerHTML = `You have bet $${enterbet.value}! Choose a number!`
        }
        render();
    }
    if (currentSelection){
        currentSelection.style.border = 'none';
        currentSelection = undefined;
    }
};

function render(){
    balancemessage.textContent = currentBalance;
};

//resets board and other manipulated elements
function reset(){
    init();
    if (currentSelection){
        currentSelection.style.border = 'none';
        currentSelection = undefined;
    }
};

//holds board selection, converts to integer
function boardSelection(number){
    if (parseInt(currentBalance.value) <= 0) return;
    if (parseInt(currentBet.value) > parseInt(currentBalance.value)) return;
    if (currentSelection) return;
    currentWinner = parseInt(number.target.id);
    currentSelection = number.target;
    number.target.style.border = '5px solid gold';
    statusmessage.style.color = 'gold';
    statusmessage.style.backgroundColor = 'black'
    statusmessage.innerHTML = `Spin the wheel!`;   
};

//randomizes wheel number between 1-36
function getNumber(){
    if (parseInt(currentBalance.value) <= 0) return;
    if (parseInt(enterbet.value) > parseInt(currentBalance.value)) return;
    let wheelValue = (Math.floor(Math.random() * 36 + 1));
    wheelResult.innerHTML = wheelValue;
    checkForWin(currentWinner, wheelValue);
};

//checks if wheel number is equal to board selection
function checkForWin(pickedNumber, winner){
    if (pickedNumber === winner){
        currentBalance += (parseInt(enterbet.value) * 36);
        statusmessage.innerHTML = 'WINNER!!!!!';
        statusmessage.style.color = 'green';
        statusmessage.style.backgroundColor = 'black';
    }else{
        statusmessage.innerHTML = 'You lose. :(';
        statusmessage.style.color = 'red';
        statusmessage.style.backgroundColor = 'black';
    }
    render();
};
