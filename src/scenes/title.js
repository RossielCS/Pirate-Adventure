import Phaser from 'phaser';

class Title extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
  }

  create() {
    this.add.image(100, 100, 'player');
  }
}

export default Title;