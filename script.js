function computerPlay(){
    let roll = Math.floor(Math.random() * 3);
    if (roll == 1){
        return "Rock";
    } if (roll == 2){
        return "Paper";
    } else {
        return "Scissors";
    }
};

let playerSelection = "Paper  ".toLowerCase().trim();
let computerSelection = computerPlay().toLowerCase();
console.log(`The computer selected ${computerSelection}.`);
console.log(`You selected ${playerSelection}.`);
function singleRound(computerSelection, playerSelection){
    if (computerSelection == playerSelection){
        return "Tie game. Play again!";
    } //else if (playerSelection == "rock" && )
};
console.log(singleRound(computerSelection, playerSelection));