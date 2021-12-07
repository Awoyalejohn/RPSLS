let playerBoxChoices = document.getElementsByClassName('player hidden');

let computerBoxChoices =document.getElementsByClassName('computer hidden')


// Wait for the DOM to finish loading before running the game
// Get the button elemnts and add event listeners to them

document.addEventListener('DOMContentLoaded', function() {
  let buttons = document.getElementsByTagName('button');

  for (let button of buttons) {
    button.addEventListener('click', function() {
      if (this.getAttribute('data-type') === 'how to play') {
        alert('You clicked How to play!');
      } else {
        let gameType = this.getAttribute("data-type");
				runGame(gameType) + displayRandomComputerGesture();
      }

    })


  }



 



})









function displayPlayerRock() {
  playerBoxChoices[0].style.display = 'block';
}

function displayPlayerPaper() {
  playerBoxChoices[1].style.display = 'block';
}

function displayPlayerScissors() {
  playerBoxChoices[2].style.display = 'block';
}

function displayPlayerLizard() {
  playerBoxChoices[3].style.display = 'block';
}

function displayPlayerSpock() {
  playerBoxChoices[4].style.display = 'block';
}


function runGame(gameType) {

	// displays the player's choice in player box 


	if (gameType === "rock") {
		displayPlayerRock()
	} else if (gameType === "paper") {
	  displayPlayerPaper();
	} else if (gameType === "scissors") {
	  displayPlayerScissors();
	} else if (gameType === "lizard") {
	  displayPlayerLizard();
	} else if (gameType === "spock") {
	  displayPlayerSpock();
	} else {
		alert(`Unknown hand gesture ${gameType}`);
		throw `Unknown hand gesture ${gameType}, aborting!`;
	}

}


function displayRandomComputerGesture() {
  let randomNum =Math.floor(Math.random() * computerBoxChoices.length);
  computerBoxChoices[randomNum].style.display = 'block';
  
}




function rockMatchPatterns() {
  if (playerBoxChoices[0].style.display === 'block' && computerBoxChoices[2].style.display === 'block') {
    alert('You Win :D');
  } else if (playerBoxChoices[0].style.display === 'block' && computerBoxChoices[3].style.display === 'block') {
    alert('You win :D');
  } else if (playerBoxChoices[0].style.display === 'block' && computerBoxChoices[1].style.display === 'block') {
    alert('You Lose :( ');
  } else if (playerBoxChoices[0].style.display === 'block' && computerBoxChoices[4].style.display === 'block') {
    alert('You Lose :(');
  } else if (playerBoxChoices[0].style.display === 'block' && computerBoxChoices[0].style.display === 'block') {
    alert('Its a Draw!');
  }
}

function paperMatchPatterns() {
  if (playerBoxChoices[1].style.display === 'block' && computerBoxChoices[0].style.display === 'block') {
    alert('You Win :D');
  } else if (playerBoxChoices[1].style.display === 'block' && computerBoxChoices[4].style.display === 'block') {
    alert('You win :D');
  } else if (playerBoxChoices[1].style.display === 'block' && computerBoxChoices[2].style.display === 'block') {
    alert('You Lose :( ');
  } else if (playerBoxChoices[1].style.display === 'block' && computerBoxChoices[3].style.display === 'block') {
    alert('You Lose :(');
  } else if (playerBoxChoices[1].style.display === 'block' && computerBoxChoices[1].style.display === 'block') {
    alert('Its a Draw!');
  }
}

function scissorsMatchPatterns() {
  if (playerBoxChoices[2].style.display === 'block' && computerBoxChoices[1].style.display === 'block') {
    alert('You Win :D');
  } else if (playerBoxChoices[2].style.display === 'block' && computerBoxChoices[3].style.display === 'block') {
    alert('You win :D');
  } else if (playerBoxChoices[2].style.display === 'block' && computerBoxChoices[0].style.display === 'block') {
    alert('You Lose :( ');
  } else if (playerBoxChoices[2].style.display === 'block' && computerBoxChoices[4].style.display === 'block') {
    alert('You Lose :(');
  } else if (playerBoxChoices[2].style.display === 'block' && computerBoxChoices[2].style.display === 'block') {
    alert('Its a Draw!');
  }
}

function lizardMatchPatterns() {
  if (playerBoxChoices[3].style.display === 'block' && computerBoxChoices[1].style.display === 'block') {
    alert('You Win :D');
  } else if (playerBoxChoices[3].style.display === 'block' && computerBoxChoices[4].style.display === 'block') {
    alert('You win :D');
  } else if (playerBoxChoices[3].style.display === 'block' && computerBoxChoices[0].style.display === 'block') {
    alert('You Lose :( ');
  } else if (playerBoxChoices[3].style.display === 'block' && computerBoxChoices[2].style.display === 'block') {
    alert('You Lose :(');
  } else if (playerBoxChoices[3].style.display === 'block' && computerBoxChoices[3].style.display === 'block') {
    alert('Its a Draw!');
  }
}

function spockMatchPatterns() {
  if (playerBoxChoices[4].style.display === 'block' && computerBoxChoices[0].style.display === 'block') {
    alert('You Win :D');
  } else if (playerBoxChoices[4].style.display === 'block' && computerBoxChoices[2].style.display === 'block') {
    alert('You win :D');
  } else if (playerBoxChoices[4].style.display === 'block' && computerBoxChoices[1].style.display === 'block') {
    alert('You Lose :( ');
  } else if (playerBoxChoices[4].style.display === 'block' && computerBoxChoices[3].style.display === 'block') {
    alert('You Lose :(');
  } else if (playerBoxChoices[4].style.display === 'block' && computerBoxChoices[4].style.display === 'block') {
    alert('Its a Draw!');
  }
}















function determineRoundWinner() {
  
}

function displayRoundWinner() {
  
}

function incrementWin() {
  let oldScore = parseInt(document.getElementById("win").innerText);
  document.getElementById("score").innerText = ++oldScore;

}

function incrementLose() {
  let oldScore = parseInt(document.getElementById("lose").innerText);
  document.getElementById("score").innerText = ++oldScore;
}

function incrementDraw() {
  let oldScore = parseInt(document.getElementById("draw").innerText);
  document.getElementById("score").innerText = ++oldScore;
}

function incrementStage() {
  let oldScore = parseInt(document.getElementById("stage").innerText);
  document.getElementById("score").innerText = ++oldScore;
}

function gameoverCondition() {
  
}

function displayGameoverWinner() {
  
}


