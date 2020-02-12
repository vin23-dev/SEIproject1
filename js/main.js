/*----- constants -----*/

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
document.querySelector('.gameboard').addEventListener('click', boardSelection);
resetGame.addEventListener('click', reset)
spinWheel.addEventListener('click', getNumber)
/*----- functions -----*/
init();

function init(){
    currentBalance = 1000;
    currentBet = enterbet.value;
    statusmessage.innerHTML = `Place your bets!!!`;
    statusmessage.style.backgroundColor = 'black';
    enterbet.value = '';
    wheelResult.innerHTML = '';
    
    render();
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
    render();
};
function render(){
    balancemessage.textContent = currentBalance;
    
    
}
function reset(){
    init();
}
function boardSelection(number){
    if (parseInt(currentBalance.value) <= 0) return;
    if (parseInt(currentBet.value) > parseInt(currentBalance.value)) return;
    if (currentSelection) return;
    currentSelection = number.target;
    number.target.style.backgroundColor = 'gold';
    statusmessage.style.color = 'gold';
    statusmessage.style.backgroundColor = 'black'
    statusmessage.innerHTML = `Spin the wheel!`;
    
};
function getNumber(){
    if (parseInt(currentBalance.value) <= 0) return;
    if (parseInt(enterbet.value) > parseInt(currentBalance.value)) return;
    let wheelValue = (Math.floor(Math.random() * 36 +1));
    wheelResult.innerHTML = wheelValue;
};