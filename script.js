let playerScore = 0;
let computerScore = 0;
let playerChoice = "paper";


function computerChoice(){
    let roll = Math.floor(Math.random() * 3);
    if (roll == 1){
        return "rock";} 
    if (roll == 2){
        return "paper";} 
    else {
        return "scissors";}
}

// function playerChoice(string) {
//     return string.toLowerCase.trim();
// }

function win(){
    playerScore++;
    return `You won! Your score is ${playerScore}. The computer's score is ${computerScore}`;
}

function lose(){
    computerScore++;
    return `You lost! Your score is ${playerScore}. The computer's score is ${computerScore}`;
}

function draw(){
    return `It\'s a tie! Your score is ${playerScore}. The computer's score is ${computerScore}.`;
}

function game(playerChoice, computerChoice){
    if (playerChoice == computerChoice) {
        return draw();
    }
    switch (playerChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorsrock":
            return win();
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            return lose();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            return draw();

    }
}

function someRounds(){
    for (let i = 0; i < 6; i++){
        console.log(game(playerChoice, computerChoice()));
    }
}

someRounds();

// let computerSelection;
// let playerSelection;
// let playerScore = 0;
// let computerScore = 0;
// function singleRound(computerSelection, playerSelection){
//     console.log(computerPlay())
//     playerSelection = "paper".toLowerCase().trim();
//     computerSelection = computerPlay().toLowerCase();
//     console.log(`The computer selected ${computerSelection}.`);
//     console.log(`You selected ${playerSelection}.`);
//     if (computerSelection == playerSelection){
//         return `Tie game. Play again! \n Player score is ${playerScore}. Computer score is ${computerScore}.` 
//     }
//     switch (computerSelection) {
//         case "paper":
//             if (playerSelection == "rock"){
//                 return "The computer won!";
//             } else {
//                 return "You won!";
//             };
//             break;
//         case "rock":
//             if (playerSelection == "paper"){
//                 return "You won!";
//             } else {
//                 return "The computer won!";
//             }
//             break;
//         case "scissors":
//             if (playerSelection == "rock"){
//                 return "You won!";
//             } else {
//                 return "The computer won!";
//             }
//             break;
//     }
// };
// // console.log(singleRound(computerSelection, playerSelection));
// function game(computerSelection, playerSelection){
//     console.log(singleRound(computerSelection, playerSelection));
//     console.log(singleRound(computerSelection, playerSelection));
//     }
// game(computerSelection, playerSelection);