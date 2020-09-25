import Phaser from 'phaser';
import { validateInput, postScore } from '../modules/game-score';

class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  // eslint-disable-next-line class-methods-use-this
  preload() {
  }

  create() {
    const { width, height } = this.sys.game.config;
    this.playerScore = this.sys.game.globals.score;

    this.add.text(width / 2, 50, `SCORE: ${this.playerScore}`, { fill: '#fff' });
    this.label = this.add.dom(
      width / 2, 100,
      'label',
      '',
      'Write your name here (3 characters minimum)',
    );

    this.input = this.add.dom(
      width / 2, 130,
      'input',
    );

    this.submit = this.add.dom(
      width / 2, 160,
      'button',
      '',
      'SUBMIT',
    );

    this.cancel = this.add.dom(
      width / 2, 200,
      'button',
      '',
      'CANCEL',
    );

    this.submit.setInteractive();
    this.submit.on('pointerdown', () => {
      const input = document.getElementsByTagName('input')[0].value;
      console.log(input);
      const data = validateInput(input);
      if (data) {
        postScore(data);
        this.scene.start('Score');
      }
    });

    this.cancel.setInteractive();
    this.cancel.on('pointerdown', () => {
      this.scene.start('Score');
    });
  }
}

export default GameOver;