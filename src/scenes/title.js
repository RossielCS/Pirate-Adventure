import Phaser from 'phaser';
import Button from '../game-objects/button';

class Title extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    const { height, width } = this.sys.game.config;

    // Game
    this.gameButton = new Button(this, width / 2, height / 2, 'blueButton1', 'blueButton2', 'Play', 'Game');

    // Credits
    this.creditsButton = new Button(this, width / 2, height / 2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');
  }
}

export default Title;