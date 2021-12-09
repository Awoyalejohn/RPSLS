let playerBoxChoices = document.getElementsByClassName('player hidden');

let computerBoxChoices =document.getElementsByClassName('computer hidden');

let myModals = document.getElementsByClassName('modals');


// Wait for the DOM to finish loading before running the game
// Get the button elemnts and add event listeners to them

document.addEventListener('DOMContentLoaded', function() {
  let buttons = document.getElementsByTagName('button');

  for (let button of buttons) {
    button.addEventListener('click', function() {
      if (this.getAttribute('data-type') === 'how to play') {
        displayHowToPlay();
      } else {
        let gameType = this.getAttribute("data-type");
				runGame(gameType); determineRoundWinner();
      }

    })


  }

let closeButtons = document.getElementsByClassName('close');
for (closeButton of closeButtons) {
  closeButton.addEventListener('click',closeModals);
}


 let closeBackgroundHow = document.getElementsByClassName('how-to-play-modal');
 closeBackgroundHow[0].addEventListener('click', closeModals);
 
 let closeBackgroundRounds = document.getElementsByClassName('round-modal');
 for (closeBackgroundRound of closeBackgroundRounds ) {
   closeBackgroundRound.addEventListener('click',closeModals);
 }
 
 
 
 



})



/**
 * displays how to play modal
*/
function displayHowToPlay() {
  myModals[0].children[0].style.display = 'block';  
}

/**
 * closes how to play modal
*/
function closeModals() {
  myModals[0].children[0].style.display = 'none';
  myModals[0].children[1].style.display = 'none';
  myModals[0].children[2].style.display = 'none';
  myModals[0].children[3].style.display = 'none';  
  
}


/**
 * displays the round win modal
*/
function displayRoundWin() {
  myModals[0].children[1].style.display = 'block';  
}


/**
 * displays the round lose modal
*/
function displayRoundLose() {
  myModals[0].children[2].style.display = 'block';  
}


/**
 * displays the round draw modal
*/
function displayRoundDraw() {
  myModals[0].children[3].style.display = 'block';  
}



/**
 * displays rock in player box
*/
function displayPlayerRock() {
  clearPlayerBoxChoice();
  playerBoxChoices[0].style.display = 'block';
}

/**
 * displays paper in player box
*/
function displayPlayerPaper() {
  clearPlayerBoxChoice();
  playerBoxChoices[1].style.display = 'block';
}

/**
 * displays scissors in player box
*/
function displayPlayerScissors() {
  clearPlayerBoxChoice();
  playerBoxChoices[2].style.display = 'block';
}

/**
 * displays lizard in player box
*/
function displayPlayerLizard() {
  clearPlayerBoxChoice();
  playerBoxChoices[3].style.display = 'block';
}

/**
 * displays spock in player box
*/
function displayPlayerSpock() {
  clearPlayerBoxChoice();
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

// displays the computers's choice in player box 

function displayRandomComputerGesture() {
  clearcomputerBoxChoice()
  let randomNum =Math.floor(Math.random() * computerBoxChoices.length);
  computerBoxChoices[randomNum].style.display = 'block';
  
}


/**
 * calculates the outcome for when rock is chosen then updates score if you win, lose, or draw. (modal to be added here!)
 */
function rockMatchPatterns() {
  if (playerBoxChoices[0].style.display === 'block' && computerBoxChoices[2].style.display === 'block') {
    incrementWin();
    displayRoundWin();
  } else if (playerBoxChoices[0].style.display === 'block' && computerBoxChoices[3].style.display === 'block') {
    incrementWin();
    displayRoundWin();
  } else if (playerBoxChoices[0].style.display === 'block' && computerBoxChoices[1].style.display === 'block') {
    incrementLose();
    displayRoundLose();
  } else if (playerBoxChoices[0].style.display === 'block' && computerBoxChoices[4].style.display === 'block') {
    incrementLose();
    displayRoundLose();
  } else if (playerBoxChoices[0].style.display === 'block' && computerBoxChoices[0].style.display === 'block') {
    incrementDraw();
    displayRoundDraw();
  }
}

/**
 * calculates the outcome for when paper is chosen
 */
function paperMatchPatterns() {
  if (playerBoxChoices[1].style.display === 'block' && computerBoxChoices[0].style.display === 'block') {
    incrementWin();
    alert('You Win :D');
  } else if (playerBoxChoices[1].style.display === 'block' && computerBoxChoices[4].style.display === 'block') {
    incrementWin();
    alert('You win :D');
  } else if (playerBoxChoices[1].style.display === 'block' && computerBoxChoices[2].style.display === 'block') {
    incrementLose();
    alert('You Lose :( ');
  } else if (playerBoxChoices[1].style.display === 'block' && computerBoxChoices[3].style.display === 'block') {
    incrementLose();
    alert('You Lose :(');
  } else if (playerBoxChoices[1].style.display === 'block' && computerBoxChoices[1].style.display === 'block') {
    incrementDraw();
    alert('Its a Draw!');
  }
}

/**
 * calculates the outcome for when scissors is chosen
 */
function scissorsMatchPatterns() {
  if (playerBoxChoices[2].style.display === 'block' && computerBoxChoices[1].style.display === 'block') {
    incrementWin();
    alert('You Win :D');
  } else if (playerBoxChoices[2].style.display === 'block' && computerBoxChoices[3].style.display === 'block') {
    incrementWin();
    alert('You win :D');
  } else if (playerBoxChoices[2].style.display === 'block' && computerBoxChoices[0].style.display === 'block') {
    incrementLose();
    alert('You Lose :( ');
  } else if (playerBoxChoices[2].style.display === 'block' && computerBoxChoices[4].style.display === 'block') {
    incrementLose();
    alert('You Lose :(');
  } else if (playerBoxChoices[2].style.display === 'block' && computerBoxChoices[2].style.display === 'block') {
    incrementDraw();
    alert('Its a Draw!');
  }
}

/**
 * calculates the outcome for when lizard is chosen
 */
function lizardMatchPatterns() {
  if (playerBoxChoices[3].style.display === 'block' && computerBoxChoices[1].style.display === 'block') {
    incrementWin();
    alert('You Win :D');
  } else if (playerBoxChoices[3].style.display === 'block' && computerBoxChoices[4].style.display === 'block') {
    incrementWin();
    alert('You win :D');
  } else if (playerBoxChoices[3].style.display === 'block' && computerBoxChoices[0].style.display === 'block') {
    incrementLose();
    alert('You Lose :( ');
  } else if (playerBoxChoices[3].style.display === 'block' && computerBoxChoices[2].style.display === 'block') {
    incrementLose();
    alert('You Lose :(');
  } else if (playerBoxChoices[3].style.display === 'block' && computerBoxChoices[3].style.display === 'block') {
    incrementDraw();
    alert('Its a Draw!');
  }
}

/**
 * calculates the outcome for when spock is chosen
 */
function spockMatchPatterns() {
  if (playerBoxChoices[4].style.display === 'block' && computerBoxChoices[0].style.display === 'block') {
    incrementWin();
    alert('You Win :D');
  } else if (playerBoxChoices[4].style.display === 'block' && computerBoxChoices[2].style.display === 'block') {
    incrementWin();
    alert('You win :D');
  } else if (playerBoxChoices[4].style.display === 'block' && computerBoxChoices[1].style.display === 'block') {
    incrementLose();
    alert('You Lose :( ');
  } else if (playerBoxChoices[4].style.display === 'block' && computerBoxChoices[3].style.display === 'block') {
    incrementLose();
    alert('You Lose :(');
  } else if (playerBoxChoices[4].style.display === 'block' && computerBoxChoices[4].style.display === 'block') {
    incrementDraw();
    alert('Its a Draw!');
  }
}

/**
 * calculates the outcome of all hand gestures chosen
 */
function determineRoundWinner() {
  displayRandomComputerGesture();
  rockMatchPatterns();
  paperMatchPatterns();
  scissorsMatchPatterns();
  lizardMatchPatterns();
  spockMatchPatterns();
}

/**
 * empties player box to a new hand gesture chosen
 */
function clearPlayerBoxChoice() {
  
  if (playerBoxChoices[0].style.display === 'block' || playerBoxChoices[1].style.display === 'block' || playerBoxChoices[2].style.display === 'block' || playerBoxChoices[3].style.display === 'block' || playerBoxChoices[4].style.display === 'block') {
    playerBoxChoices[0].style.display = 'none';
    playerBoxChoices[1].style.display = 'none';
    playerBoxChoices[2].style.display = 'none';
    playerBoxChoices[3].style.display = 'none';
    playerBoxChoices[4].style.display = 'none';
  }
}

/**
 * empties computer box to a new hand gesture chosen
 */
function clearcomputerBoxChoice() {
  if (computerBoxChoices[0].style.display === 'block' || computerBoxChoices[1].style.display === 'block' || computerBoxChoices[2].style.display === 'block' || computerBoxChoices[3].style.display === 'block' || computerBoxChoices[4].style.display === 'block') {
    computerBoxChoices[0].style.display = 'none';
    computerBoxChoices[1].style.display = 'none';
    computerBoxChoices[2].style.display = 'none';
    computerBoxChoices[3].style.display = 'none';
    computerBoxChoices[4].style.display = 'none';
  }
}

function displayRoundWinner() {
  
}

function incrementWin() {
  let oldScore = parseInt(document.getElementById("win").innerText);
  document.getElementById("win").innerText = ++oldScore;

}

function incrementLose() {
  let oldScore = parseInt(document.getElementById("lose").innerText);
  document.getElementById("lose").innerText = ++oldScore;
}

function incrementDraw() {
  let oldScore = parseInt(document.getElementById("draw").innerText);
  document.getElementById("draw").innerText = ++oldScore;
}

function incrementRound() {
  let oldScore = parseInt(document.getElementById("round").innerText);
  document.getElementById("round").innerText = ++oldScore;
}

function gameoverCondition() {
  
}

function displayGameoverWinner() {
  
}


