import Phaser from 'phaser';
import { sortScores } from '../modules/game-score';


class Score extends Phaser.Scene {
  constructor() {
    super('Score');
  }

  create() {
    this.scores = sortScores(this.sys.game.globals.allScores);
    if (this.scores) {
      this.add.text(2, 2, 'SCORES', { fill: '#fff' });
      this.add.text(10, 10, `${JSON.stringify(this.scores.result)}`, { fill: '#fff' });
    } else {
      this.add.text(0, 0, 'There was an error while trying to get the scores.', { fill: '#fff' });
    }
  }
}

export default Score;