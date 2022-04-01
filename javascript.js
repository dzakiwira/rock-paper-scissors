
// Randomly picks between ROCK, PAPER, or SCISSORS
function computerPlay() {
    let pick = ['ROCK', 'PAPER', 'SCISSORS']
    return pick[Math.floor(Math.random() * 3)]
}

// Plays a round and returns the winner
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase();

    console.log(playerSelection);
    console.log(computerSelection);

    if(computerSelection === 'ROCK' && playerSelection != 'ROCK') {
        if(playerSelection === 'PAPER') {
            outcome = 'You Win! PAPER beats ROCK.';
            return true;
        }
        else {
            outcome = 'You Lose! ROCK beats SCISSORS.';
            return false;
        }
    }

    else if(computerSelection === 'PAPER' && playerSelection != 'PAPER') {
        if(playerSelection === 'SCISSORS') {
            outcome = 'You Win! SCISSORS beats PAPER.';
            return true;
        }
        else {
            outcome = 'You Lose! PAPER beats ROCK.';
            return false;
        }
    }

    else if(computerSelection === 'SCISSORS' && playerSelection != 'SCISSORS') {
        if(playerSelection === 'ROCK') {
            outcome = 'You Win! ROCK beats SCISSORS.';
            return true;
        }
        else {
            outcome = 'You Lose! SCISSORS beats PAPER.';
            return false;
        }
    }

    else {
        return null;
    }
}

// Runs through whole game until winner is established
function game(){

    let x = 0;
    let y = 0;

    for (let playerScore = 0, computerScore = 0; computerScore < 5 && playerScore <5;) {
        let playerSelection = prompt("Type ond of Rock, Paper, Scissors");
        const computerSelection = computerPlay();

        if (playRound(playerSelection, computerSelection)) {
            x = ++playerScore;
            
        }
        else if(playRound(playerSelection, computerSelection) === false){
            y = ++computerScore;
            
        }
        else {
            console.log("It's a draw!");
        }

    console.log(playerScore)
    console.log(computerScore)
    }

    console.log(x);
    console.log(y);

    if (x === 5) {
        alert("You Win!!!!!1!!!!1!11!!!!!!111!")
    }
    else {
        alert("You're fucking shite mate")
    }

}


game();