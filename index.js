function getComputerChoice() {
    let hand = ['rock','paper','scissors'];
    let res = 0;
    res = Math.floor(Math.random() * 3);
    console.log(hand[res]);
}
window.onload = getComputerChoice();