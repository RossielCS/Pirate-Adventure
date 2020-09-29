import Phaser from 'phaser';
import { validateInput, postScore, getScores } from '../modules/game-score';

class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    const { width, height } = this.sys.game.config;
    this.blocked = false;
    this.playerScore = this.sys.game.globals.model.score;

    this.gameOverImg = this.add.image(width / 2, height / 2, 'leaderboardImg');
    this.gameOverImg.setScale(3.2);

    this.gameOverTitle = this.add.image(210, 70, 'gameOverTitle');
    this.gameOverTitle.setTint(0xff100c);
    this.gameOverTitle.setOrigin(0, 0);
    this.gameOverTitle.setScale(3);

    this.scoreTitle = this.add.image(240, 110, 'scoreTitle');
    this.scoreTitle.setOrigin(0, 0);
    this.scoreTitle.setScale(2.5);

    this.add.text(422, 109, `${this.playerScore}`, { fontFamily: 'Arial', fontSize: '27px', fill: '#000' });

    if (this.playerScore !== 0) {
      this.label = this.add.dom(
        width / 2, 190,
        'label',
        { fontFamily: 'Arial', fontSize: '17px', align: 'center' },
        'Write your name here\nto save your score\n\n(3 characters minimum)',
      );

      this.input = this.add.dom(
        width / 2, 240,
        'input',
      );

      this.submit = this.add.dom(
        width / 2, 280,
        'button',
        '',
        'SUBMIT',
      );

      this.cancel = this.add.dom(
        width / 2, 315,
        'button',
        '',
        'CANCEL',
      );

      this.submit.addListener('pointerdown');
      this.submit.on('pointerdown', async () => {
        if (!this.blocked) {
          this.blocked = true;
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
        }
      });

      this.cancel.addListener('pointerdown');
      this.cancel.on('pointerdown', async () => {
        if (!this.blocked) {
          this.blocked = true;
          this.sys.game.globals.model.allScores = await getScores();
          this.scene.start('Score');
        }
      });
    } else {
      this.add.text(230, 180, 'Click on the button\nto advance.', {
        fontFamily: 'Arial',
        fontSize: '27px',
        fill: '#000',
        align: 'center',
      });
      this.next = this.add.dom(
        width / 2, 280,
        'button',
        '',
        'NEXT',
      );

      this.next.addListener('pointerdown');
      this.next.on('pointerdown', async () => {
        this.sys.game.globals.model.allScores = await getScores();
        this.scene.start('Score');
      });
    }
  }
}

export default GameOver;