const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman =(humanChoise) => {
    playTheGame(humanChoise, playMachine())
}

const playMachine = () => {
    const choises = ['rock', 'paper', 'cissors']
    const radomNumber = Math.floor(Math.random() * 3)

    return choises[radomNumber]
}
const playTheGame = (human, machine) => {
    console.log('humano:' + human + "maquina:"+ machine)

    if(human === machine){
        result.innerHTML = 'Deu empate!'
    }else if( (human === 'paper' && machine === 'rock') ||
    (human === 'rock' &&  machine === 'cissors') ||
    (human === 'cissors' && machine === 'paper')
   ){
    humanScoreNumber ++
    humanScore.innerHTML=humanScoreNumber
     result.innerHTML = 'Você ganhou!'
   } else{
    machineScoreNumber ++
    machineScore.innerHTML = machineScoreNumber
     result.innerHTML = 'A Alexa ganhou!'
   }

    

    }






