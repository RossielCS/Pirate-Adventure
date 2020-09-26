import Phaser from 'phaser';

class Boot extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  create() {
    this.scene.start('Preloader');
  }
}

export default Boot;