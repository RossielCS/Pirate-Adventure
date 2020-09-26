import Phaser from 'phaser';
import Button from '../game-objects/button';
import { sortScores } from '../modules/game-score';
import { createTable, addValuesToTable } from '../modules/dom';


class Score extends Phaser.Scene {
  constructor() {
    super('Score');
  }

  create() {
    const { width, height } = this.sys.game.config;
    this.scores = this.sys.game.globals.model.allScores.result.sort(sortScores);

    if (this.scores) {
      this.leaderboardImg = this.add.image(width / 2, height / 2, 'leaderboardImg');
      this.leaderboardImg.setScale(3);
      this.leaderboardTitle = this.add.image(202, 72, 'leaderboardTitle');
      this.leaderboardTitle.setOrigin(0, 0);
      this.leaderboardTitle.setScale(2.5);
      this.table = createTable();
      addValuesToTable(this.scores);
    } else {
      this.add.text(width / 2, height / 2, 'There was an error while\ntrying to get the scores.', { fill: '#fff' });
    }

    this.restart = new Button(this, 80, height / 2, 'greenButton1', 'greenButton2', 'RESTART', 'Game', 3);
    this.home = new Button(this, width - 80, height / 2, 'greenButton1', 'greenButton2', 'HOME', 'Boot', 3);
  }
}

export default Score;