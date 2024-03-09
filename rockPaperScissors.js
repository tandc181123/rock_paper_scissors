let playRound = (playerSelection, computerSelection) => {
    const selections = ['rock', 'paper', 'scissors'];
    const winning = `You Win! ${playerSelection} beats ${computerSelection}.`;
    
    if ((selections.includes(playerSelection)) && 
        (selections.includes(computerSelection))) {

        if (playerSelection === computerSelection) {
            return "It's a tie!";
        } else if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'rock')
        ) {
            return winning;
        } else {
            return `You Lose! ${computerSelection} beats ${playerSelection}.`;
        }
    } else {
        return 'Wrong input.';
    }
};

let getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex].toLowerCase();
};

let getUserChoice = () => {
    return prompt("Rock, Paper, Scissors!").toLowerCase();
};

let playGame = () => {
    let playersScore = 0;
    let computersScore = 0;

    for (let i = 0; i < 5; i++) {
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();
        const gameResult = playRound(userChoice, computerChoice);

        if (gameResult.toLowerCase().includes("win")) {
            playersScore ++;
        } else if (gameResult.toLowerCase().includes("lose")) {
            computersScore ++;
        } else if (gameResult.toLowerCase().includes("wrong")){
            console.log(gameResult);
            i --;
            continue;
        }

        let combatSituation = `Round ${i + 1} player: ${userChoice} `
                            + `computer: ${computerChoice} \n`
                            + `${gameResult} \n`
                            + `The score is player: ${playersScore} `
                            + `vs computer: ${computersScore}`;
        console.log(combatSituation);
    }
    
    if (playersScore > computersScore) {
        console.log('The winner is player!');
    } else if (playersScore < computersScore) {
        console.log('The winner is computer!');
    } else {
        console.log('Both are winners!');
    }
};

playGame();