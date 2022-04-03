const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((buttons) => {
    buttons.addEventListener('click', () => {
        results.setAttribute('style', 'white-space: pre-wrap;');
        results.textContent = ' ';
        results.textContent += `${playRound(buttons.id, computerPlay())}\n Your score is: ${playerScore}\n Computer score is: ${computerScore}`;
        checkWinner(playerScore, computerScore);

    })
})


// Checks round wins for winner
function checkWinner(playerScore, computerScore) {

    if (playerScore === 5) {
        results.textContent = `You have beat the computer ${playerScore} - ${computerScore}`;
    }
    else if (computerScore === 5){
        results.textContent = `You have lost to the computer ${playerScore} - ${computerScore}`;
    }

}

// Randomly picks between ROCK, PAPER, or SCISSORS
function computerPlay() {
    const pick = ['ROCK', 'PAPER', 'SCISSORS'];
    return pick[Math.floor(Math.random() * pick.length)];
}

// Plays a round and returns the winner
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase();

    if(computerSelection === 'ROCK' && playerSelection != 'ROCK') {
        if(playerSelection === 'PAPER') {
            outcome = 'You Win! PAPER beats ROCK.';
            playerScore++;
        }
        else {
            outcome = 'You Lose! ROCK beats SCISSORS.';
            computerScore++;
        }
    }

    else if(computerSelection === 'PAPER' && playerSelection != 'PAPER') {
        if(playerSelection === 'SCISSORS') {
            outcome = 'You Win! SCISSORS beats PAPER.';
            playerScore++;
        }
        else {
            outcome = 'You Lose! PAPER beats ROCK.';
            computerScore++;
        }
    }

    else if(computerSelection === 'SCISSORS' && playerSelection != 'SCISSORS') {
        if(playerSelection === 'ROCK') {
            outcome = 'You Win! ROCK beats SCISSORS.';
            playerScore++;
        }
        else {
            outcome = 'You Lose! SCISSORS beats PAPER.';
            computerScore++;
        }
    }
    else {
        return "It's a draw!";
    }
    return outcome;
}