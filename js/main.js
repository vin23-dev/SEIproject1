/*----- constants -----*/
const wheelArray = [

]


/*----- app's state (variables) -----*/
let currentBalance;
let currentBet;
let currentSelection;
/*----- cached element references -----*/
let resetGame = document.getElementById('resetwheel');
/*----- event listeners -----*/
document.getElementById('placebet').addEventListener('click', adjustBalance);
/*----- functions -----*/
init();

function init(){
    currentBalance = 1000;
    renderBalance();
}

function adjustBalance(){
    currentBalance -= parseInt(enterbet.value);
    if (currentBalance === 0){
        statusmessage.style.color = 'gold';
        statusmessage.innerHTML = `You're out of money!`;
    }else if (parseInt(enterbet.value) > parseInt(currentBalance)){
        statusmessage.style.color = 'gold';
        statusmessage.innerHTML = `You don't have enough money to make that wager!`
    }else{
        statusmessage.style.color = 'gold';
        statusmessage.innerHTML = `You have bet $${enterbet.value}! Choose a number!`
    }
    renderBalance();
};
function renderBalance(){
    balancemessage.textContent = currentBalance;
}