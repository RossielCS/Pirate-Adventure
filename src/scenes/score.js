import Phaser from 'phaser';
import { getScores } from '../modules/game-score';

class Score extends Phaser.Scene {
  constructor() {
    super('Score');
  }

  create() {
    this.allScores = getScores();
    if (this.allScores) {
      this.add.text(0, 0, 'SCORES', { fill: '#fff' });
      this.add.text(0, 0, `${this.allScores}`, { fill: '#fff' });
    } else {
      this.add.text(0, 0, 'There was an error while trying to get the scores.', { fill: '#fff' });
    }
  }
}

export default Score;