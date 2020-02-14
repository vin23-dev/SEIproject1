/*----- constants -----*/

const redArr = [1, 3, 5, 7, 9, 12, 14, 16,
    18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
const blackArr = [2, 4, 6, 8, 10, 11, 13, 15,
     17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

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
            statusmessage.innerHTML = `You don't have enough money to make that wager!`
        }else{
            statusmessage.style.color = 'gold';
            statusmessage.style.backgroundColor = 'black'
            statusmessage.innerHTML = `You have bet $${enterbet.value}! Choose a number!`
        }
        render();
    }
}

function render(){
    balancemessage.textContent = currentBalance;
};

function reset(){
    init();
    if (currentSelection){
        currentSelection.style.border = 'none';
        currentSelection = undefined;
    }
};

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

function getNumber(){
    if (parseInt(currentBalance.value) <= 0) return;
    if (parseInt(enterbet.value) > parseInt(currentBalance.value)) return;
    let wheelValue = (Math.floor(Math.random() * 36 + 1));
    wheelResult.innerHTML = wheelValue;
    checkForWin(currentWinner, wheelValue);
};

function checkForWin(pickedNumber, winner){
    if (pickedNumber === winner){
        statusmessage.innerHTML = 'WINNER!!!!!';
        statusmessage.style.color = 'green';
        statusmessage.style.backgroundColor = 'black';
    }else{
        statusmessage.innerHTML = 'You lose. :(';
        statusmessage.style.color = 'red';
        statusmessage.style.backgroundColor = 'black';
    }
};

function checkColor(){
    if (currentWinner){
        
    }
}