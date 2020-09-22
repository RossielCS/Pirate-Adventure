import Phaser from 'phaser';
import Button from '../game-objects/button';

class Title extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    // Game
    this.gameButton = new Button(this, this.sys.game.config.width / 2, this.sys.game.config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');
  }
}

export default Title;