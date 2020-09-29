import Phaser from 'phaser';
import Button from '../game-objects/button';

class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  create() {
    const { width } = this.sys.game.config;
    this.model = this.sys.game.globals.model;

    this.text = this.add.text(260, 40, 'Options', { fontSize: 40 });
    this.musicButton = this.add.image(200, 140, 'checkbox2');
    this.musicText = this.add.text(250, 130, 'Music Enabled', { fontSize: 24 });

    this.musicButton.setInteractive();

    this.musicButton.on('pointerdown', (() => {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    }));

    this.menuButton = new Button(this, width / 2, 300, 'greenButton1', 'greenButton2', 'Back', 'Title', 3);

    this.updateAudio();
  }

  updateAudio() {
    if (this.model.musicOn === false) {
      this.musicButton.setTexture('checkbox1');
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('checkbox2');
      if (this.model.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }
  }
}

export default OptionsScene;