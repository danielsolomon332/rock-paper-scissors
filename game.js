class Game {
  constructor() {
    this.humanPlayer = new Player("Human");
    this.computerPlayer = new Player("Computer");
    this.chooseGame = "";
    this.winner = "";
  }

  chooseGameLogic() {
    if (this.chooseGame === "classicButton") {
      this.classicGameLogic();
    } else if (this.chooseGame === "difficultButton") {
        this.difficultGameLogic();
    }
  }

  classicGameLogic() {
    if (this.humanPlayer.iconChoice === "rock-pic" && this.computerPlayer.iconChoice === 0) {
      this.winner = "tie";
    } else if (this.humanPlayer.iconChoice === "rock-pic" && this.computerPlayer.iconChoice === 1) {
      this.computerPlayer.wins +=1;
      this.winner = "computer";
    } else if (this.humanPlayer.iconChoice === "rock-pic" && this.computerPlayer.iconChoice === 2) {
      this.humanPlayer.wins +=1;
      this.winner = "human";
    } else if (this.humanPlayer.iconChoice === "paper-pic" && this.computerPlayer.iconChoice === 0) {
      this.humanPlayer.wins +=1;
      this.winner = "human";
    } else if (this.humanPlayer.iconChoice === "paper-pic" && this.computerPlayer.iconChoice === 1) {
      this.winner = "tie";
    } else if (this.humanPlayer.iconChoice === "paper-pic" && this.computerPlayer.iconChoice === 2) {
      this.computerPlayer.wins +=1;
      this.winner = "computer";
    } else if (this.humanPlayer.iconChoice === "scissor-pic" && this.computerPlayer.iconChoice === 0) {
      this.computerPlayer.wins +=1;
      this.winner = "computer";
    } else if (this.humanPlayer.iconChoice === "scissor-pic" && this.computerPlayer.iconChoice === 1) {
      this.humanPlayer.wins +=1;
      this.winner = "human";
    } else if (this.humanPlayer.iconChoice === "scissor-pic" && this.computerPlayer.iconChoice === 2) {
      this.winner = "tie";
    }
  }

  difficultGameLogic() {
    if (this.humanPlayer.iconChoice === "rock-pic" && this.computerPlayer.iconChoice === 0) {
      this.winner = "tie";
    } else if (this.humanPlayer.iconChoice === "rock-pic" && this.computerPlayer.iconChoice === 1) {
      this.computerPlayer.wins +=1;
      this.winner = "computer";
    } else if (this.humanPlayer.iconChoice === "rock-pic" && this.computerPlayer.iconChoice === 2) {
      this.humanPlayer.wins +=1;
      this.winner = "human";
    } else if (this.humanPlayer.iconChoice === "rock-pic" && this.computerPlayer.iconChoice === 3) {
      this.humanPlayer.wins +=1;
      this.winner = "human";
    } else if (this.humanPlayer.iconChoice === "rock-pic" && this.computerPlayer.iconChoice === 4) {
      this.computerPlayer.wins +=1;
      this.winner = "computer";
    } else if (this.humanPlayer.iconChoice === "paper-pic" && this.computerPlayer.iconChoice === 0) {
      this.humanPlayer.wins +=1;
      this.winner = "human";
    } else if (this.humanPlayer.iconChoice === "paper-pic" && this.computerPlayer.iconChoice === 1) {
      this.winner = "tie";
    } else if (this.humanPlayer.iconChoice === "paper-pic" && this.computerPlayer.iconChoice === 2) {
      this.computerPlayer.wins +=1;
      this.winner = "computer";
    } else if (this.humanPlayer.iconChoice === "paper-pic" && this.computerPlayer.iconChoice === 3) {
      this.computerPlayer.wins +=1;
      this.winner = "computer";
    } else if (this.humanPlayer.iconChoice === "paper-pic" && this.computerPlayer.iconChoice === 4) {
      this.humanPlayer.wins +=1;
      this.winner = "human";
    } else if (this.humanPlayer.iconChoice === "scissor-pic" && this.computerPlayer.iconChoice === 0) {
      this.computerPlayer.wins +=1;
      this.winner = "computer";
    } else if (this.humanPlayer.iconChoice === "scissor-pic" && this.computerPlayer.iconChoice === 1) {
      this.humanPlayer.wins +=1;
      this.winner = "human";
    } else if (this.humanPlayer.iconChoice === "scissor-pic" && this.computerPlayer.iconChoice === 2) {
      this.winner = "tie";
    } else if (this.humanPlayer.iconChoice === "scissor-pic" && this.computerPlayer.iconChoice === 3) {
      this.humanPlayer.wins +=1;
      this.winner = "human";
    } else if (this.humanPlayer.iconChoice === "scissor-pic" && this.computerPlayer.iconChoice === 4) {
      this.computerPlayer.wins +=1;
      this.winner = "computer";
    } else if (this.humanPlayer.iconChoice === "lizard-pic" && this.computerPlayer.iconChoice === 0) {
      this.computerPlayer.wins +=1;
      this.winner = "computer";
    } else if (this.humanPlayer.iconChoice === "lizard-pic" && this.computerPlayer.iconChoice === 1) {
      this.humanPlayer.wins +=1;
      this.winner = "human";
    } else if (this.humanPlayer.iconChoice === "lizard-pic" && this.computerPlayer.iconChoice === 2) {
      this.computerPlayer.wins +=1;
      this.winner = "computer";
    } else if (this.humanPlayer.iconChoice === "lizard-pic" && this.computerPlayer.iconChoice === 3) {
      this.winner = "tie";
    } else if (this.humanPlayer.iconChoice === "lizard-pic" && this.computerPlayer.iconChoice === 4) {
      this.humanPlayer.wins +=1;
      this.winner = "human";
    } else if (this.humanPlayer.iconChoice === "alien-pic" && this.computerPlayer.iconChoice === 0) {
      this.humanPlayer.wins +=1;
      this.winner = "human";
    } else if (this.humanPlayer.iconChoice === "alien-pic" && this.computerPlayer.iconChoice === 1) {
      this.computerPlayer.wins +=1;
      this.winner = "computer";
    } else if (this.humanPlayer.iconChoice === "alien-pic" && this.computerPlayer.iconChoice === 2) {
      this.humanPlayer.wins +=1;
      this.winner = "human";
    } else if (this.humanPlayer.iconChoice === "alien-pic" && this.computerPlayer.iconChoice === 3) {
      this.computerPlayer.wins +=1;
      this.winner = "computer";
    } else if (this.humanPlayer.iconChoice === "alien-pic" && this.computerPlayer.iconChoice === 4) {
      this.winner = "tie";
    }
  }

  saveGameWins() {
    this.humanPlayer.saveWinsToStorage();
    this.computerPlayer.saveWinsToStorage();
  }

  retrieveGameWins() {
    this.humanPlayer.retrieveWinsFromStorage();
    this.computerPlayer.retrieveWinsFromStorage();
  }
}
