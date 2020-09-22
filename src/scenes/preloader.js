import Phaser from 'phaser';
import player from '../assets/images/player1.png';
import blueButton02 from '../assets/ui/blue_button02.png';
import blueButton03 from '../assets/ui/blue_button03.png';
import bgImg from '../assets/images/background/bg-image.png';
import bgImgTop from '../assets/images/background/additional-sky-top.png';
import bgImgBottom from '../assets/images/background/additional-sky-bottom.png';

import platformImg from '../assets/images/terrain/2.png';
import terrain from '../assets/images/terrain/terrain.png';
import terrainJSON from '../assets/images/terrain/terrainJSON';

class Preloader extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    // add logo image
    this.add.image(340, 80, 'logo');

    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(190, 170, 320, 50);

    const { x, y } = this.cameras.main.midPoint;
    const loadingText = this.make.text({
      x,
      y: y - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x,
      y: y - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x,
      y: y + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(200, 180, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    // remove progress bar when complete
    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(1000, this.ready, [], this);

    // load assets
    this.load.image('player', player);
    this.load.image('blueButton1', blueButton02);
    this.load.image('blueButton2', blueButton03);
    this.load.image('bgImg', bgImg);
    this.load.image('bgImgTop', bgImgTop);
    this.load.image('bgImgBottom', bgImgBottom);
    this.load.atlas('terrain', terrain, terrainJSON);
    this.load.image('platformImg', platformImg);
  }

  ready() {
    this.scene.start('Game');
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}

export default Preloader;