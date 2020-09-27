import Phaser from 'phaser';
import Button from '../game-objects/button';

class Title extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    const { height, width } = this.sys.game.config;

    // Title
    this.title1 = this.add.image(width / 2, 60, 'title1');
    this.title1.setScale(3);
    this.title2 = this.add.image(width / 2, 110, 'title2');
    this.title2.setScale(3);

    // Game
    this.gameButton = new Button(this, width / 2, height / 2 + 20, 'greenButton1', 'greenButton2', 'START', 'Game', 3);

    // Options
    this.optionsButton = new Button(this, width / 2, height / 2 + 75, 'greenButton1', 'greenButton2', 'OPTIONS', 'Options', 3);

    // Credits
    this.creditsButton = new Button(this, width / 2, height / 2 + 130, 'greenButton1', 'greenButton2', 'CREDITS', 'Credits', 3);

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
}

export default Title;