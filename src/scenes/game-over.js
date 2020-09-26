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
    this.playerScore = this.sys.game.globals.model.score;

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
      width / 2, 170,
      'button',
      '',
      'SUBMIT',
    );

    this.cancel = this.add.dom(
      width / 2, 210,
      'button',
      '',
      'CANCEL',
    );

    this.submit.addListener('pointerdown');
    this.submit.on('pointerdown', async () => {
      const input = {};
      input.user = document.getElementsByTagName('input')[0].value;
      input.score = this.playerScore;
      const data = validateInput(input);
      if (data) {
        const response = await postScore(data);
        if (response) {
          this.sys.game.globals.model.allScores = await getScores();
          this.scene.start('Score');
        }
      }
    });

    this.cancel.addListener('pointerdown');
    this.cancel.on('pointerdown', async () => {
      this.sys.game.globals.model.allScores = await getScores();
      this.scene.start('Score');
    });
  }
}

export default GameOver;