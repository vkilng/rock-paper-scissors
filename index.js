let hand = ['rock','paper','scissors'];
function getComputerChoice() {
    let res = 0;
    res = Math.floor(Math.random() * 3);
    return hand[res];
}

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == computerSelection) {
        return '--DRAW--';
    }else if(playerSelection=='rock' && computerSelection=='scissors'){
        return true;
    }else if(playerSelection=='paper' && computerSelection=='rock'){
        return true;
    }else if(playerSelection=='scissors' && computerSelection=='paper') {
        return true; 
    }else {return false;};
}

let playerSelection = 'scissors';
let computerSelection = getComputerChoice();
console.log('Compter\'s choice: '+computerSelection);
console.log(playRound(playerSelection,computerSelection));