const { result, humanScoreNumber, humanScore, machineScoreNumber, machineScore } = require("./scrips");

if (human === machine) {
    result.innerHTML = "Deu Empate!";
} else if ((human === 'paper' && machine === 'rock') ||
    (human === 'rock' && machine === 'scissors') ||
    (human === 'scissors' && machine === 'paper')) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = "Você ganhou!";
} else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "Você perdeu para a Alexa!";





}
