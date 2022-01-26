# RPSLS
RPSLS is a game targeted towards people that are interested in playing a challenging game of rock, paper, scissor. 
It has extra hand gestures for  lizard and spock. that lowered the chance of greeting a draw that would typically happen when playing the regular version of the game.

The live link can be found here - https://awoyalejohn.github.io/RPSLS/

![RPSLS website Mockup](https://github.com/Awoyalejohn/RPSLS/blob/main/assets/readme-files/website-mockup-image.PNG)

## Features 

### Existing Features
 
- The Header
  - Featured at the top of the page.
  - Has a hyper link to the homepage.
  - Users can use it another way to reset the page.
  - The header has a blue background colour.
  - The logo is white with a game controller icon next beside which contrasts well with the blue background.
  - Font style used for the website title text is Catamaran.
 
![Header](https://github.com/Awoyalejohn/RPSLS/blob/main/assets/readme-files/heade-image.PNG)
 
- The controls area
  - Featured below the header.
  - The controls area gives access to the how to play button, restart button and music button.
  - When the user clicks on the how to play button a modal will pop up and give a brief explanation of how you play the game. The modal can be closed by clicking anywhere on the screen.
  - The restart button clears all the values on the page and starts the game again..
  - The logo is white with a game controller icon next beside which contrasts well with the blue background.
  - The music button plays the audio file put inside the game.
 
![Controls area image](https://github.com/Awoyalejohn/RPSLS/blob/main/assets/readme-files/controls-image.PNG)
 
- The game area
  - Featured below the controls area
  - This shows the area where the hand gestures will display when one of them is clicked on to.
  - The box on the left shows the players choices and the box on the right shows the computers choices.
 
 ![game area image](https://github.com/Awoyalejohn/RPSLS/blob/main/assets/readme-files/game-area-image.PNG)
 
- The round area
  - Featured below the game area
  - This tracks the rounds that pass
 
![round area image](https://github.com/Awoyalejohn/RPSLS/blob/main/assets/readme-files/round%20image.PNG)
 
- The score area
  - Featured below the roundarea
  - This keeps track of the wins, losses, and draws that occur every round
 
![score area image](https://github.com/Awoyalejohn/RPSLS/blob/main/assets/readme-files/score-image.PNG)
 
- The hand gesture area
  - Featured below the score
  - This is where they will select their choice button when going against the computer.
  - The buttons have an oranger hover effect when the mouse is hovered above it.
  - This makes it easier for users to pick the choice that they want.
 
![hand gesture area](https://github.com/Awoyalejohn/RPSLS/blob/main/assets/readme-files/hand-gestures-image.PNG)
 
- The footer area
  - Featured below hand gesture area
  - Shows the social media icons to Twitter, facebook, instagram and youtube
  - All are links that will open a new tab when clicked
  - The copyright info is also at the very bottom of the site.
 
![footer area](https://github.com/Awoyalejohn/RPSLS/blob/main/assets/readme-files/footer-image.PNG)
 
- The modals 
  - A group of seven modals that will pop up depending on the condition
  - The how to modal shows how to play the game and can be closed by clicking the x  button or on background
  - Round win modal displays whenever the player wins a round
  - Round lose modal displays whenever the player wins a round 
  - Round draw modal displays whenever the player wins a round 
  - Game win  modal displays the player won the game if the player wins 5 rounds.
  - Gamelose  modal displays the player lost the game if  player loses 5 rounds
  - Game draw modal displays whenever the player draws in 5 rounds
 
![Round win modal](https://github.com/Awoyalejohn/RPSLS/blob/main/assets/readme-files/round-win.PNG)
 
![Round lose modal](https://github.com/Awoyalejohn/RPSLS/blob/main/assets/readme-files/round-lose.PNG)
 
![Round draw modal](https://github.com/Awoyalejohn/RPSLS/blob/main/assets/readme-files/round-draw.PNG)
  
![Game win modal](https://github.com/Awoyalejohn/RPSLS/blob/main/assets/readme-files/game-win.PNG)
   
![Game lose modal](https://github.com/Awoyalejohn/RPSLS/blob/main/assets/readme-files/game-lose.PNG)

![Game draw modal](https://github.com/Awoyalejohn/RPSLS/blob/main/assets/readme-files/game-draw.PNG)

## Testing

- I tested that the game works in different browsers: Chrome, Firefox, and Opera.
- I confirmed that all buttons worked with the intended result when clicked.
- I confirmed that the gameover modal would show after 5 points to win, draw, or lose.
- I confirmed that the header, How to Play, Restart Game and music options, results and footer icons are readable and easy to understand.
- I confirmed that the game is responsive, looks good and functions on all standard screen sizes using devtools device toolbar.

### Bugs

#### Solved bugs
- When I added a way for the hand gestures to display inside of the boxes when a hand gesture button was clicked. The hand gestures would stack on top of each other after every new hand gesture button click. I fixed this by adding a function the would check if there was already a hand gestuer inside the box then stop it from displaying by changing that hand gesture to hidden before the new hand gesture would display.

- I hade a bug where some hand gestures would display outside of the computer hand gesture box when the website was being viewed on larger screens. I fixed this by adding more media queries to postion the hand gesture better inside the computer hand gesture box.

### Validator Testing
- HTML
  - Now errors were returned when passing throught the [official W3C Validator.](https://validator.w3.org/nu/?doc=https%3A%2F%2Fawoyalejohn.github.io%2FRPSLS%2F)
- CSS 
  - No errors were found when passing througj the oficial [(Jigsaw) validator.](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fawoyalejohn.github.io%2FRPSLS%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JS
  - No errors were present when passing through the javascript validator.
- Accessibility
  - I confirmed that the colours and fonts chosen are easy to read and accessible by running the website through the lighthouse in devtools. I also used the the Adobe color contrast checker to test if the colour scheme was accessible.

![Lighthouse result](https://github.com/Awoyalejohn/RPSLS/blob/main/assets/readme-files/lighthouse-result.PNG)
![Adobe color contrast colour scheme result](https://github.com/Awoyalejohn/RPSLS/blob/main/assets/readme-files/colour-accessiblility.PNG)

### Unfixed Bugs
No unfixed bugs

## Deployment
- The website was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the settings tab
  - From the sources section drop-down menu, select the Main Branch
  - Once the Main branch has been selected, the page will provide a link to the completed website

The live link can be found here - https://awoyalejohn.github.io/RPSLS/

    
## Credits

### Content
- The code used to hide the images of the hand gestures came from [w3schools]( https://www.w3schools.com/cssref/pr_class_display.asp)
- The code used to target elements with the same class was taken from [Pretag](https://pretagteam.com/question/applying-different-content-to-same-class-instances-in-css)
- The code used to display an element that was hidden was taken from [w3schools](https://www.w3schools.com/jsref/prop_style_display.asp)
- The code used to randomise computer choices was taken from an answer on [Stackoverflow](https://stackoverflow.com/questions/22623331/rock-paper-scissors-lizard-spock-in-javascript)
- Update score function code was taking from the [love maths tutorial](https://www.youtube.com/watch?v=9sPrhBoTmSk)
- The code used to check if an elemrnt in CSS was set to displaywas taken from [Stackoverflow](https://stackoverflow.com/questions/4866229/check-element-css-display-with-javascript/41495923#41495923)
- Code used to make the modals was taken from [W3schools](https://www.w3schools.com/howto/howto_css_modals.asp)
- The code used to add audio was taken from [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)
- The code used to pause and play audio with javascript from taken from an answer on [Stackoveflow](https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link)
- The code for the Social Media buttons came from [love running tutorial](https://www.youtube.com/watch?v=i7brtaTm-3A)
- DOMcontent loaded event listener code for all buttons I got from [love maths tutorial](https://www.youtube.com/watch?v=C3O-G2ab46Q)
- The do nothing code came from [Stackoveflow](https://stackoverflow.com/questions/21528660/how-do-you-make-your-else-statement-do-nothing/21528735)
- The code used for the emojis is from [W3schools](https://www.w3schools.com/charsets/ref_emoji.asp)
- The code used to updates scores was from the [love maths tutorial](https://www.youtube.com/watch?v=9sPrhBoTmSk)

### Media
- The images for the hand gestures came from [font awesome](https://fontawesome.com/)
- The audio I used for the music button is from [my brother’s soundcloud](https://soundcloud.com/the-h3rmit/optimism)

     
  
 
 

