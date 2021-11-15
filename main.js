// QUERY SELECTORS //
var gameSelectionView = document.querySelector('.middle-section-bottom-start');
var classicFighterBtns = document.querySelector('.classic-fighter-buttons');
var difficultFighterBtns = document.querySelector('.difficult-fighter-buttons');
var classicGameBtn = document.querySelector('.classic-button');
var difficultGameBtn = document.querySelector('.difficult-button');

// EVENT LISTENERS //
classicGameBtn.addEventListener('click', showChooseFighterClassic);
difficultGameBtn.addEventListener('click', showChooseFighterDifficult);

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
