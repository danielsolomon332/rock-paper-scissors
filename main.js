var newGame = new Game();

// QUERY SELECTORS //
var gameSelectionView = document.querySelector('.middle-section-bottom-start');
var classicFighterBtns = document.querySelector('.classic-fighter-buttons');
var difficultFighterBtns = document.querySelector('.difficult-fighter-buttons');
var classicGameBtn = document.querySelector('.classic-button');
var difficultGameBtn = document.querySelector('.difficult-button');
var rockBtn = document.querySelector('.rock-button');
var paperBtn = document.querySelector('.paper-button');
var scissorsBtn = document.querySelector('.scissors-button');
var lizardBtn = document.querySelector('.lizard-button');
var alienBtn = document.querySelector('.alien-button');
var changeGameBtn = document.querySelector('.change-game-button')
var humanWins = document.querySelector('.human-wins')
var computerWins = document.querySelector('.computer-wins')
var changeLowerTitle = document.querySelector('.choose-your-game-title')

var classic;
var difficult;

// EVENT LISTENERS //
window.addEventListener('load', displayTotalWins)
classicGameBtn.addEventListener('click', showChooseFighterClassic);
difficultGameBtn.addEventListener('click', showChooseFighterDifficult);
rockBtn.addEventListener('click', checkIcon)
paperBtn.addEventListener('click', checkIcon)
scissorsBtn.addEventListener('click', checkIcon)
lizardBtn.addEventListener('click', checkIcon)
alienBtn.addEventListener('click', checkIcon)
changeGameBtn.addEventListener('click', showOriginalGameOptions)

// FUNCTIONS //
function show(element) {
element.classList.remove('hidden');
};

function hide(element) {
element.classList.add('hidden');
};

function showChooseFighterClassic(event) {
  classic = event.target.id;
  newGame.chooseGame = classic;
  hide(gameSelectionView);
  show(classicFighterBtns);
  changeLowerTitle.innerText = `Choose your fighter!`
}

function showChooseFighterDifficult() {
  difficult = event.target.id;
  newGame.chooseGame = difficult;
  hide(gameSelectionView);
  show(classicFighterBtns);
  show(difficultFighterBtns);
  changeLowerTitle.innerText = `Choose your fighter!`
}

function showOriginalGameOptions() {
  show(gameSelectionView);
  hide(classicFighterBtns);
  hide(difficultFighterBtns);
  hide(changeGameBtn);
}

function displayTotalWins() {
  newGame.retrieveGameWins();
  if (newGame.humanPlayer.wins === null && newGame.computerPlayer.wins === null) {
    humanWins.innerText = `Wins: 0`
    computerWins.innerText = `Wins: 0`
  } else if (newGame.humanPlayer.wins > 0 && newGame.computerPlayer.wins === null) {
    humanWins.innerText = `Wins: ${newGame.humanPlayer.wins}`
    computerWins.innerText = `Wins: 0`
  } else if (newGame.humanPlayer.wins === null && newGame.computerPlayer.wins > 0) {
    humanWins.innerText = `Wins: 0`
    computerWins.innerText = `Wins: ${newGame.computerPlayer.wins}`
  } else {
    humanWins.innerText = `Wins: ${newGame.humanPlayer.wins}`
    computerWins.innerText = `Wins: ${newGame.computerPlayer.wins}`
  }
}

function checkIcon(event) {
  var userIcon = event.target.classList.value
  newGame.humanPlayer.iconChoice = userIcon
  newGame.computerPlayer.takeTurn();
  newGame.chooseGameLogic();
  newGame.saveGameWins();
  displayTotalWins();
  show(changeGameBtn)
}
