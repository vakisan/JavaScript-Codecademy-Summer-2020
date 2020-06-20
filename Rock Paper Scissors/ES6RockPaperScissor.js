// trying to use as much ES6 and complex forms of coding to practice see the non ES6 version for better sturctured code

const checkPlayerChoice = choice => {
    let standardisedChoice = choice.toLowerCase();
    let passed = (standardisedChoice === "rock" || standardisedChoice === "paper" || standardisedChoice === "scissor") ? true : console.log("Your input is not recognised");
    if (passed) {
        return standardisedChoice;
    }
}

const playerChoice = choice => {
    switch (checkPlayerChoice(choice)) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissor":
            return 2;
        default:
            return "invalid choice"; // for debugging and confirm functionality. logical testing
    }
}

const cpuChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    switch (cpuChoice) {
        case 0:
            choice = 0;
            break;
        case 1:
            choice = 1;
            break;
        case 2:
            choice = 2;
            break;
    }
    return choice;
}

const determineWinner = (player, cpu) => {
    if (player === cpu) {
        console.log("Draw");
    }
    else if (player > cpu && (player - cpu) === 2) {
        gamePlay(player, cpu);
        playerIsWinner();
    }
    else {
        gamePlay(player, cpu);
        cpuIsWinner();
    }
}

/// proves that compiling occurs as gameplay is called before being declared. possibly in the form of hoisting.
const gamePlay = (player, cpu) => {
    if (player === 0) {
        player = "rock";
    }
    else if (player === 1) {
        player = "paper";
    }
    else if (player === 2) {
        player = "scissor";
    }

    if (cpu === 0) {
        cpu = "rock";
    }
    else if (cpu === 1) {
        cpu = "paper";
    }
    else if (cpu === 2) {
        cpu = "scissor";
    }

    console.log(`You chose ${player} and CPU chose ${cpu}.`);
}

const cpuIsWinner = () => console.log("CPU wins");

const playerIsWinner = () => console.log("Player wins");

//run game

determineWinner(playerChoice("rock"), cpuChoice());
