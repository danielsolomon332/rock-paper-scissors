var newGame = new Game();

// QUERY SELECTORS //
var gameSelectionView = document.querySelector('.middle-section-bottom-start');
var fightView = document.querySelector('.middle-section-bottom-fighter');
var resultsView = document.querySelector('.results-view');
var classicFighterBtns = document.querySelector('.classic-fighter-buttons');
var difficultFighterBtns = document.querySelector('.difficult-fighter-buttons');
var classicGameBtn = document.querySelector('.classic-button');
var difficultGameBtn = document.querySelector('.difficult-button');
var rockBtn = document.querySelector('.rock-button');
var paperBtn = document.querySelector('.paper-button');
var scissorsBtn = document.querySelector('.scissors-button');
var lizardBtn = document.querySelector('.lizard-button');
var alienBtn = document.querySelector('.alien-button');
var humanRockPic = document.querySelector('#humanRock');
var humanPaperPic = document.querySelector('#humanPaper');
var humanScissorsPic = document.querySelector('#humanScissor');
var humanLizardPic = document.querySelector('#humanLizard');
var humanAlienPic = document.querySelector('#humanAlien');
var computerRockPic = document.querySelector('#computerRock');
var computerPaperPic = document.querySelector('#computerPaper');
var computerScissorsPic = document.querySelector('#computerScissor');
var computerLizardPic = document.querySelector('#computerLizard');
var computerAlienPic = document.querySelector('#computerAlien');
var changeGameBtn = document.querySelector('.change-game-button');
var humanWins = document.querySelector('.human-wins');
var computerWins = document.querySelector('.computer-wins');
var changeLowerTitle = document.querySelector('.choose-your-game-title');

var classic;
var difficult;

// EVENT LISTENERS //
window.addEventListener('load', displayTotalWins);
classicGameBtn.addEventListener('click', showChooseFighterClassic);
difficultGameBtn.addEventListener('click', showChooseFighterDifficult);
rockBtn.addEventListener('click', checkIcon);
paperBtn.addEventListener('click', checkIcon);
scissorsBtn.addEventListener('click', checkIcon);
lizardBtn.addEventListener('click', checkIcon);
alienBtn.addEventListener('click', checkIcon);
changeGameBtn.addEventListener('click', showOriginalGameOptions);

// FUNCTIONS //
function show(element) {
element.classList.remove('hidden');
};

function hide(element) {
element.classList.add('hidden');
};

function showChooseFighterClassic() {
  classic = event.target.id;
  newGame.chooseGame = classic;
  hide(gameSelectionView);
  show(classicFighterBtns);
  changeLowerTitle.innerText = `Choose your fighter!`;
}

function showChooseFighterDifficult() {
  difficult = event.target.id;
  newGame.chooseGame = difficult;
  hide(gameSelectionView);
  show(classicFighterBtns);
  show(difficultFighterBtns);
  changeLowerTitle.innerText = `Choose your fighter!`;
}

function showOriginalGameOptions() {
  show(gameSelectionView);
  hide(classicFighterBtns);
  hide(difficultFighterBtns);
  hide(changeGameBtn);
  hide(fightView);
  hide(resultsView);
  changeLowerTitle.innerText = `Choose your game!`;
}

function showFight() {
  hide(gameSelectionView);
  hide(classicFighterBtns);
  hide(difficultFighterBtns);
  show(resultsView);
  if (newGame.humanPlayer.iconChoice === "rock-pic") {
    show(humanRockPic);
  }
  if (newGame.humanPlayer.iconChoice === "paper-pic") {
    show(humanPaperPic);
  }
  if (newGame.humanPlayer.iconChoice === "scissor-pic") {
    show(humanScissorsPic);
  }
  if (newGame.humanPlayer.iconChoice === "lizard-pic") {
    show(humanLizardPic);
  }
  if (newGame.humanPlayer.iconChoice === "alien-pic") {
    show(humanAlienPic);
  }
  if (newGame.computerPlayer.iconChoice === 0) {
    show(computerRockPic);
  }
  if (newGame.computerPlayer.iconChoice === 1) {
    show(computerPaperPic);
  }
  if (newGame.computerPlayer.iconChoice === 2) {
    show(computerScissorsPic);
  }
  if (newGame.computerPlayer.iconChoice === 3) {
    show(computerLizardPic);
  }
  if (newGame.computerPlayer.iconChoice === 4) {
    show(computerAlienPic);
  }
}

function displayWinner() {
  if (newGame.winner === "human") {
    changeLowerTitle.innerText = `Oh you made it! You won against AI!`;
  } else if (newGame.winner === "computer") {
    changeLowerTitle.innerText = `Computer Wins!`;
  } else {
    changeLowerTitle.innerText = `It's a Tie!`;
  }
}

function hideResults() {
  hide(humanRockPic);
  hide(humanPaperPic);
  hide(humanScissorsPic);
  hide(humanLizardPic);
  hide(humanAlienPic);
  hide(computerRockPic);
  hide(computerPaperPic);
  hide(computerScissorsPic);
  hide(computerLizardPic);
  hide(computerAlienPic);
}

function displayTotalWins() {
  newGame.retrieveGameWins();
  if (newGame.humanPlayer.wins === null && newGame.computerPlayer.wins === null) {
    humanWins.innerText = `Wins: 0`;
    computerWins.innerText = `Wins: 0`;
  } else if (newGame.humanPlayer.wins > 0 && newGame.computerPlayer.wins === null) {
    humanWins.innerText = `Wins: ${newGame.humanPlayer.wins}`;
    computerWins.innerText = `Wins: 0`;
  } else if (newGame.humanPlayer.wins === null && newGame.computerPlayer.wins > 0) {
    humanWins.innerText = `Wins: 0`;
    computerWins.innerText = `Wins: ${newGame.computerPlayer.wins}`;
  } else {
    humanWins.innerText = `Wins: ${newGame.humanPlayer.wins}`;
    computerWins.innerText = `Wins: ${newGame.computerPlayer.wins}`;
  }
}

function checkIcon(event) {
  var userIcon = event.target.classList.value;
  newGame.humanPlayer.iconChoice = userIcon;
  newGame.computerPlayer.takeTurn();
  newGame.chooseGameLogic();
  newGame.saveGameWins();
  displayTotalWins();
  showFight();
  displayWinner();
  hide(changeGameBtn);
  setTimeout(function() {
  hide(resultsView);
  hideResults();
  changeLowerTitle.innerText = `Choose your fighter!`;
  if (newGame.chooseGame === "classicButton") {
    show(classicFighterBtns);
    show(changeGameBtn);
  } else if (newGame.chooseGame === "difficultButton") {
    show(classicFighterBtns);
    show(difficultFighterBtns);
    show(changeGameBtn);
  }
}, 1000);
}
