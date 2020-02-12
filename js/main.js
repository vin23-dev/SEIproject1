/*----- constants -----*/
const wheelArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
/*----- app's state (variables) -----*/
let currentBalance;
let currentBet;
let currentSelection;
/*----- cached element references -----*/
let resetGame = document.getElementById('resetwheel');
let spinWheel = document.getElementById('spinwheel');
let wheelResult = document.getElementById('wheel');
/*----- event listeners -----*/
document.getElementById('placebet').addEventListener('click', adjustBalance);
resetGame.addEventListener('click', reset)
spinWheel.addEventListener('click', getNumber)
/*----- functions -----*/
init();

function init(){
    currentBalance = 1000;
    statusmessage.innerHTML = `Place your bets!!!`;
    statusmessage.style.backgroundColor = 'black';
    renderBalance();
}

function adjustBalance(){
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
    renderBalance();
};
function renderBalance(){
    balancemessage.textContent = currentBalance;
}
function reset(){
    init();
}
function boardSelection(event){
    if (currentBalance.value <= 0) return;
    if (enterbet.value > currentBalance.value) return;
    if (currentSelection) return;
    currentSelection = event.target;
    event.target.style.backgroundColor = '5px solid gold';
}
function getNumber(){
    if (parseInt(currentBalance.value) <= 0) return;
    if (parseInt(enterbet.value) > parseInt(currentBalance.value)) return;
    let wheelValue = (Math.floor(Math.random() * 36 +1));
    wheelResult.innerHTML = wheelValue;
    wheelValue.style.color = 'gold';
}