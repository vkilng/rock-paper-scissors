let score = {player:0, computer:0};
let hand = ['rock','paper','scissors'];
let compElem = document.getElementById('computer');

function getComputerChoice() {
    let result = 0;
    result = Math.floor(Math.random() * 3);
    return hand[result];
}

function playRound(playerSelection,computerSelection) {
    if(playerSelection === computerSelection) {
        return 'DRAW';
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return true;
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return true;
    }else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        return true; 
    }else {
        return false;
    };
}

function game(playerSelection) {
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    transition();
    let to = setTimeout(() => {
        compElem.style.backgroundSize = 'cover';
        compElem.style.backgroundPosition = 'center';
        if(computerSelection  === 'rock'){
            compElem.style.backgroundImage = "url(resources/hand-rock.png)";
        } else if(computerSelection  === 'paper'){
            compElem.style.backgroundImage = "url(resources/hand-paper.png)";
        } else if(computerSelection  === 'scissors'){
            compElem.style.backgroundImage = "url(resources/hand-scissors.png)";
        };
        let result = playRound(playerSelection,computerSelection);
        if(typeof result  === "boolean") {
            if(result) {
                score.player = score.player+1;
                document.getElementById('playerscore').innerText = score.player;
            } else {
                score.computer=score.computer+1;
                document.getElementById('computerscore').innerText = score.computer;
            };
        };
        let final = document.getElementById('final');
        if(score.player === 5){
            final.style.color = 'green';
            final.innerText = 'You Won';
            document.getElementById('player').style.pointerEvents = 'none';
            to = setTimeout(()=>{window.location.reload()},3000);
        } else if(score.computer === 5){
            final.style.color = 'red';
            final.innerText = 'You Lost';
            document.getElementById('player').style.pointerEvents = 'none';
            to = setTimeout(() => {window.location.reload()},3000);
        }
    },50);
}

function transition() {
    compElem.style.background = 'linear-gradient(to right, black 50%, transparent 0)';
    compElem.style.backgroundSize = '200% 100%'
    const compElemEffects = {
      backgroundPosition : ['right','left','right']
    };
    const compElemTiming = {
      duration: 50,
    };
    compElem.animate(compElemEffects,compElemTiming);
}