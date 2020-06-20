//pre ES6 regular function calls

function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor') {
        return userInput;
    }
    else {
        console.log("Your input is not recognised");
    }
}

function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3);
    switch (cpuChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
        default:
            return "invalid choice"; // debugging 
    }
}
function determineWinner(player, cpu) {
    if (player === cpu) {
        console.log("Draw");
    }
    else {
        if (player === "paper" && cpu === "rock") {
            gamePlay(player, cpu);
            playerIsWinner();
        }
        else if (player === "paper" && cpu === "scissor") {
            gamePlay(player, cpu);
            cpuIsWinner();
        }
        else {
            if (player === "scissor" && cpu === "paper") {
                gamePlay(player, cpu);
                playerIsWinner();
            }
            else if (player === "scissor" && cpu === "rock") {
                gamePlay(player, cpu);
                cpuIsWinner();
            }
            else {
                if (player === "rock" && cpu === "scissor") {
                    gamePlay(player, cpu);
                    playerIsWinner();
                }
                else if (player === "rock" && cpu === "paper") {
                    gamePlay(player, cpu);
                    cpuIsWinner();
                }
            }
        }
    }
}

function playerIsWinner() {
    console.log("Player wins");
}

function cpuIsWinner() {
    console.log("CPU wins");
}

function gamePlay(player, cpu) {
    console.log(`You chose ${player} and CPU chose ${cpu}.`);
}

determineWinner(getUserChoice('Scissor'), getComputerChoice());