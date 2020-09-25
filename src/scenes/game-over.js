import Phaser from 'phaser';
import { validateInput, postScore, getScores } from '../modules/game-score';

class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  // eslint-disable-next-line class-methods-use-this
  preload() {
  }

  create() {
    const { width, height } = this.sys.game.config;
    this.add.text(0, 0, 'hola', { fill: '#fff' });
    this.label = this.add.dom(
      width / 2, height / 2 - 20,
      'label',
      '',
      "User's Name",
    );

    this.input = this.add.dom(
      width / 2, height / 2,
      'input',
    );

  }
}

export default GameOver;