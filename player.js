class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.iconChoice = '';
  }

  saveWinsToStorage() {

  }

  retrieveWinsFromStorage() {

  }

  takeTurn() {
    this.iconChoice = Math.floor(Math.random() * 3);
  }
}
