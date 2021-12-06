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
				runGame(handGesture) + displayRandomComputerGesture();
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
		displayPlayerRock()
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
  let randomNum =Math.floor(Math.random() * computerBoxChoices.length);
  computerBoxChoices[randomNum].style.display = 'block';
  
}



function determineRoundWinner() {
  
}

function displayRoundWinner() {
  
}

function incrementWin() {
  let oldWin = parseInt(document.getElementById('win').innerText);
  document.getElementById('win').innerText = ++oldWin;

}

function incrementLose() {
  let oldLose = parseInt(document.getElementById('lose').innerText);
  document.getElementById('lose').innerText = ++oldLose;
}

function incrementDraw() {
  let oldDraw = parseInt(document.getElementById('draw').innerText);
  document.getElementById('draw').innerText = ++oldDraw;
}

function incrementStage() {
  let oldStage = parseInt(document.getElementById('stage').innerText);
  document.getElementById('stage').innerText = ++oldStage;
}

function gameoverCondition() {
  
}

function displayGameoverWinner() {
  
}


