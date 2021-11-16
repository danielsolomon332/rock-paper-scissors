class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.iconChoice = '';
  }

  saveWinsToStorage() {
    if (this.wins >= 0) {
      var winTotal = JSON.stringify(this.wins);
      localStorage.setItem(this.name, winTotal);
    }
  }

  retrieveWinsFromStorage() {
    var updatedWins = localStorage.getItem(this.name);
    this.wins = JSON.parse(updatedWins);
  }

  takeTurn() {
    if (newGame.chooseGame === "classicButton") {
      this.iconChoice = Math.floor(Math.random() * 3);
    } else if (newGame.chooseGame === "difficultButton") {
      this.iconChoice = Math.floor(Math.random() * 5);
    }
    console.log(this.iconChoice)
  }
}
