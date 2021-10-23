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
