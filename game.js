// if user clicks rock && computer === 0, tie
// else if user clicks rock && computer === 1, computer wins

class Game {
  constructor() {
    this.humanPlayer = new Player("Daniel");
    this.computerPlayer = new Player("computer");
  }

  gameLogic() {
    if (this.humanPlayer.iconChoice === "rock-pic" && this.computerPlayer.iconChoice === 0) {
      console.log("You tie")
    } else if (this.humanPlayer.iconChoice === "rock-pic" && this.computerPlayer.iconChoice === 1) {
      this.computerPlayer.wins +=1
      console.log("You lose")
    } else if (this.humanPlayer.iconChoice === "rock-pic" && this.computerPlayer.iconChoice === 2) {
      this.humanPlayer.wins +=1
      console.log("You win")
    } else if (this.humanPlayer.iconChoice === "paper-pic" && this.computerPlayer.iconChoice === 0) {
      this.humanPlayer.wins +=1
      console.log("You win")
    } else if (this.humanPlayer.iconChoice === "paper-pic" && this.computerPlayer.iconChoice === 1) {
      console.log("You tie")
    } else if (this.humanPlayer.iconChoice === "paper-pic" && this.computerPlayer.iconChoice === 2) {
      this.computerPlayer.wins +=1
      console.log("You lose")
    } else if (this.humanPlayer.iconChoice === "scissor-pic" && this.computerPlayer.iconChoice === 0) {
      this.computerPlayer.wins +=1
      console.log("You lose")
    } else if (this.humanPlayer.iconChoice === "scissor-pic" && this.computerPlayer.iconChoice === 1) {
      this.humanPlayer.wins +=1
      console.log("You win")
    } else if (this.humanPlayer.iconChoice === "scissor-pic" && this.computerPlayer.iconChoice === 2) {
      console.log("You tie")
    }
  }
}
