// Wait for the DOM to finish loading before running the game
// Get the button elemnts and add event listeners to them

document.addEventListener('DOMContentLoaded', function() {
  let buttons = document.getElementsByTagName('button');

  for (let button of buttons) {
    button.addEventListener('click', function() {
      if (this.getAttribute('data-type') === 'how to play') {
        alert('You clicked How to play!');
      } else {
        let gametype = this.getAttribute('data-type');
        alert(`You clicked ${gametype}`);
      }

    })


  }



 



})










function runGame() {



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


