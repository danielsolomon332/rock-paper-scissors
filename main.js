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
var humanWins = document.querySelector('.human-wins')
var computerWins = document.querySelector('.computer-wins')

// EVENT LISTENERS //
classicGameBtn.addEventListener('click', showChooseFighterClassic);
difficultGameBtn.addEventListener('click', showChooseFighterDifficult);
rockBtn.addEventListener('click', checkIcon)
paperBtn.addEventListener('click', checkIcon)
scissorsBtn.addEventListener('click', checkIcon)

// FUNCTIONS //
function show(element) {
element.classList.remove('hidden');
};

function hide(element) {
element.classList.add('hidden');
};

function showChooseFighterClassic() {
  hide(gameSelectionView);
  show(classicFighterBtns);
}

function showChooseFighterDifficult() {
  hide(gameSelectionView);
  show(classicFighterBtns);
  show(difficultFighterBtns);
}

function checkIcon(event) {
  var userIcon = event.target.classList.value
  newGame.humanPlayer.iconChoice = userIcon
  newGame.computerPlayer.takeTurn()
  newGame.gameLogic()
  humanWins.innerText = `Wins: ${newGame.humanPlayer.wins}`
  computerWins.innerText = `Wins: ${newGame.computerPlayer.wins}`

}
