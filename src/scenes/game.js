import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
  }

  create() {
    this.add.image(100, 100, 'player');
  }
}

export default Game;