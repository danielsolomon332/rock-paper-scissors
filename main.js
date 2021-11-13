// QUERY SELECTORS //
var gameSelectionView = document.querySelector('.middle-section-bottom-start');
var fighterBtns = document.querySelector('.fighter-buttons');
var classicBtn = document.querySelector('.classic-button');
var difficultBtn = document.querySelector('.difficult-button');

// EVENT LISTENERS //
classicBtn.addEventListener('click', showChooseFighterClassic);
// difficultBtn.addEventListener('click', showChooseFighterDifficult);

// FUNCTIONS //
function show(element) {
element.classList.remove('hidden');
};

function hide(element) {
element.classList.add('hidden');
};

function showChooseFighterClassic() {
  hide(gameSelectionView);
  show(fighterBtns);
}
