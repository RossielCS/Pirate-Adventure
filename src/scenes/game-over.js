import Phaser from 'phaser';
import { validateInput, postScore, getScores } from '../modules/game-score';
import Model from '../modules/model';

class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  // eslint-disable-next-line class-methods-use-this
  preload() {
  }

  create() {
    this.playerScore = null;
    const { width, height } = this.sys.game.config;

    this.add.text(0, 0, 'hola', { fill: '#fff' });
    this.label = this.add.dom(
      width / 2, 50,
      'label',
      '',
      "User's Name",
    );

    this.input = this.add.dom(
      width / 2, 80,
      'input',
    );

    this.button = this.add.dom(
      width / 2, 120,
      'button',
      '',
      'SUBMIT',
    );

    this.button.setInteractive();

    this.button.on('pointerdown', () => {
      const { value } = document.getElementsByTagName('input')[0].value;
      const data = validateInput(value);
      if (data) {
        this.playerScore = postScore(data);
      }
    });
  }
}

export default GameOver;