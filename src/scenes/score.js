import Phaser from 'phaser';
import { sortScores } from '../modules/game-score';
import { createTable, addValuesToTable } from '../modules/dom';


class Score extends Phaser.Scene {
  constructor() {
    super('Score');
  }

  create() {
    const { width, height } = this.sys.game.config;
    this.scores = this.sys.game.globals.allScores.result.sort(sortScores);

    if (this.scores) {
      // this.add.text(2, 2, 'SCORES', { fill: '#fff' });
      // this.add.text(10, 10, `${JSON.stringify(this.scores)}`, { fill: '#fff' });
      this.tBody = createTable();
      // console.log(this.scores);
      addValuesToTable(this.tBody, this.scores);
    } else {
      this.add.text(0, 0, 'There was an error while trying to get the scores.', { fill: '#fff' });
    }
  }
}

export default Score;