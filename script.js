const gameBoard = () => {
  const hands = ["rock", "paper", "scissors"];
  let score = {
    player: 0,
    computer: 0,
    winnerOfRound: '',
    winnerOfGame: '',
  };

  const getComputerChoice = () => {
    return Math.floor(Math.random() * 3);
  }

  const playerWins = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
      return 'DRAW';
    } else if (playerSelection === 0 && computerSelection === 2) {
      return true;
    } else if (playerSelection === 1 && computerSelection === 0) {
      return true;
    } else if (playerSelection === 2 && computerSelection === 1) {
      return true;
    } else {
      return false;
    }
  }

  const playRound = (playerSelection) => {
    playerSelection = hands.indexOf(playerSelection);

    const computerSelection = getComputerChoice();
    updateComputerPanel(computerSelection);

    if (playerWins(playerSelection, computerSelection) === true) {
      score.player++;
      score.winnerOfRound = 'Player';
    } else if (playerWins(playerSelection, computerSelection) === false) {
      score.computer++;
      score.winnerOfRound = 'Computer';
    } else {
      score.winnerOfRound = 'None - It was a DRAW';
    }

    updateScorePanel();

    if (score.player === 5) {
      score.winnerOfGame = 'Player';
      declareWinnerOfGame();
    } else if (score.computer === 5) {
      score.winnerOfGame = 'Computer';
      declareWinnerOfGame();
    }
  }

  const updateComputerPanel = (computerSelection) => {
    const handName = hands[computerSelection];
    document.querySelector('.computer.panel .hand-name').textContent = `Computer plays ${handName.toUpperCase()}`;
    document.querySelector('.computer.panel .hand').style.backgroundImage = `url(./resources/hand-${handName}.png)`;
  }

  const updateScorePanel = () => {
    document.querySelector('.player.score').textContent = score.player;
    document.querySelector('.computer.score').textContent = score.computer;
    document.querySelector('.score.panel .winner').textContent = score.winnerOfRound;
  }

  const declareWinnerOfGame = () => {
    document.querySelector('.declaration > div:first-of-type').textContent = 'Winner of Game';
    document.querySelector('.declaration .winner').textContent = score.winnerOfGame;
  }

  return { score, playRound, declareWinnerOfGame };
}

const Game = (() => {
  const board = gameBoard();

  const playerPanel = document.querySelector('.player.panel');
  playerPanel.addEventListener('click', (event) => {
    if (board.score.winnerOfGame !== '') {
      return;
    }
    board.playRound(event.target.classList[0]);
  })

})();