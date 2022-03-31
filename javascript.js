// Randomly picks between ROCK, PAPER, or SCISSORS
function computerPlay() {
    let pick = ['ROCK', 'PAPER', 'SCISSORS']
    return pick[Math.floor(Math.random() * 3)]
}

// Plays a round and returns the winner
function playRound(playerSelection, computerSelection) {

    let outcome = '';
    playerSelection = playerSelection.toUpperCase();

    console.log(playerSelection)
    console.log(computerSelection)

    if(computerSelection === 'ROCK' && playerSelection != 'ROCK') {
        if(playerSelection === 'PAPER') {
            outcome = 'You Win! PAPER beats ROCK.';
        }
        else {
            outcome = 'You Lose! ROCK beats SCISSORS.';
        }
        return outcome;
    }
    else if(computerSelection === 'PAPER' && playerSelection != 'PAPER') {
        if(playerSelection === 'SCISSORS') {
            outcome = 'You Win! SCISSORS beats PAPER.';
        }
        else {
            outcome = 'You Lose! PAPER beats ROCK.';
        }
        return outcome;
    }
    else if(computerSelection === 'SCISSORS' && playerSelection != 'SCISSORS') {
        if(playerSelection === 'ROCK') {
            outcome = 'You Win! ROCK beats SCISSORS.';
        }
        else {
            outcome = 'You Lose! SCISSORS beats PAPER.';
        }
        return outcome;
    }
    else {
        return outcome = "It's a draw!"
    }
}

const playerSelection = "PaPeR";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

