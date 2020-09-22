import Phaser from 'phaser';
import coke from '../assets/images/cokecan.png';

class Boot extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', coke);
    console.log('boot');
  }

  create() {
    this.scene.start('Preloader');
  }
}

export default Boot;