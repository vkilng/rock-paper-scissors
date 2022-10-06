let hand = ['rock','paper','scissors'];
function getComputerChoice() {
    let res = 0;
    res = Math.floor(Math.random() * 3);
    return hand[res];
}

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let res = '';
    if(playerSelection == computerSelection) {
        res='DRAW';
    }else if(playerSelection=='rock' && computerSelection=='scissors'){
        res='Win';
    }else if(playerSelection=='paper' && computerSelection=='rock'){
        res='Win';
    }else if(playerSelection=='scissors' && computerSelection=='paper') {
        res='Win'; 
    }else {res='Defeat';};
    return res;
}

function game() {
    let gamearray = [];
    let PwinCounter = 0;
    let CwinCounter = 0;
    let player = '';
    for(let i=0; i<=5; i++) {
        let playerSelection = window.prompt('Your turn','rock/paper/scissors');
        let computerSelection = getComputerChoice();
        let res = playRound(playerSelection,computerSelection);
        console.log('(Player\'s choice, Compter\'s choice): ('+playerSelection+','+computerSelection+')');
        gamearray.push(res);
        console.log('GameArray: '+gamearray);
        if(res=='Win') {
            PwinCounter++;
        } else if(res=='Defeat') {CwinCounter++;};
    };
    if(PwinCounter==CwinCounter){
        console.log('--DRAW--');
    }else if(PwinCounter>CwinCounter) {
        console.log('--> You Win');
    }else {
        console.log('--> You Lost');
    }
}

window.onload = game();