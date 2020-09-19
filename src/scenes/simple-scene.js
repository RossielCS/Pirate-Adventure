import Phaser from 'phaser';
import cokecan from '../assets/cokecan.png';

class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('cokecan', cokecan);
  }

  create() {
    this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
    this.add.image(100, 200, 'cokecan');
  }
}

export default SimpleScene;