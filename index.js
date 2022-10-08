let hand = ['rock','paper','scissors'];
function getComputerChoice() {
    let res = 0;
    res = Math.floor(Math.random() * 3);
    return hand[res];
}

function playRound(playerSelection,computerSelection) {
    if(playerSelection == computerSelection) {
        return 'DRAW';
    }else if(playerSelection=='rock' && computerSelection=='scissors'){
        return true;
    }else if(playerSelection=='paper' && computerSelection=='rock'){
        return true;
    }else if(playerSelection=='scissors' && computerSelection=='paper') {
        return true; 
    }else {
        return false;
    };
}

let score = {player:0,computer:0};

function game(playerSelection) {
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    let compelem = document.getElementById('computer');
    if(computerSelection == 'rock'){
        compelem.style.backgroundImage = "url(resources/hand-rock.png)";
    } else if(computerSelection == 'paper'){
        compelem.style.backgroundImage = "url(resources/hand-paper.png)";
    } else if(computerSelection == 'scissors'){
        compelem.style.backgroundImage = "url(resources/hand-scissors.png)";
    };
    //const to = setTimeout(()=>{compelem.style.backgroundImage = null;},5000);
    let res = playRound(playerSelection,computerSelection);
    if(typeof res == "boolean") {
        if(res) {
            score.player=score.player+1;
            document.getElementById('playerscore').innerText = score.player;
        } else {
            score.computer=score.computer+1;
            document.getElementById('computerscore').innerText = score.computer;
        };
    };
    let final = document.getElementById('final');
    if(score.player == 5){
        final.style.color = 'green';
        final.innerText = 'You Won';
        document.getElementById('player').style.pointerEvents = 'none';
        to = setTimeout(()=>{window.location.reload()},3000);
    } else if(score.computer == 5){
        final.style.color = 'red';
        final.innerText = 'You Lost';
        document.getElementById('player').style.pointerEvents = 'none';
        to = setTimeout(()=>{window.location.reload()},3000);
    }
}