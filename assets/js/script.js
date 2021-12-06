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
        let handGesture = this.getAttribute("data-type");
				runGame(handGesture);
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


function runGame(handGesture) {

	// displays the player's choice in player box 


	if (handGesture === "rock") {
		displayPlayerRock();
	} else if (handGesture === "paper") {
	  displayPlayerPaper();
	} else if (handGesture === "scissors") {
	  displayPlayerScissors();
	} else if (handGesture === "lizard") {
	  displayPlayerLizard();
	} else if (handGesture === "spock") {
	  displayPlayerSpock();
	} else {
		alert(`Unknown hand gesture ${handGesture}`);
		throw `Unknown hand gesture ${handGesture}, aborting!`;
	}

}


function displayRandomComputerGesture() {
  
}


function displayPlayerGesture() {
 
}


function displayComputerGestureChosen() {
  
}

function determineRoundWinner() {
  
}

function displayRoundWinner() {
  
}

function incrementWin() {
  
}

function incrementLose() {
  
}

function incrementDraw() {
  
}

function incrementRound() {
  
}

function gameoverCondition() {
  
}

function displayGameoverWinner() {
  
}


