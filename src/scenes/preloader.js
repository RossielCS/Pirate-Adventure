import Phaser from 'phaser';
import title1 from '../assets/images/ui/title1.png';
import title2 from '../assets/images/ui/title2.png';
import greenButton1 from '../assets/images/ui/button-green1.png';
import greenButton2 from '../assets/images/ui/button-green2.png';
import checkbox1 from '../assets/images/ui/checkbox1.png';
import checkbox2 from '../assets/images/ui/checkbox2.png';
import bgMusic from '../assets/music/bg-music.mp3';
import scoreTitle from '../assets/images/ui/score-title.png';
import menuImg from '../assets/images/ui/menu.png';
import leaderboardImg from '../assets/images/ui/leaderboard.png';
import leaderboardTitle from '../assets/images/ui/leaderboard-title.png';
import gameOverTitle from '../assets/images/ui/game-over-title.png';
import bgImg from '../assets/images/background/bg-image.png';
import bgImgTop from '../assets/images/background/additional-sky-top.png';
import bgImgBottom from '../assets/images/background/additional-sky-bottom.png';
import bigClouds from '../assets/images/background/big-clouds.png';
import terrain from '../assets/images/terrain/terrain.png';
import terrainJSON from '../assets/images/terrain/terrainJSON';
import pirateAnim from '../assets/images/pirate/pirate_anim.json';
import pirate from '../assets/images/pirate/pirate_atlas.json';
import piratePng from '../assets/images/pirate/pirate.png';
import diamondAnim from '../assets/images/diamond/diamond_anim.json';
import diamond from '../assets/images/diamond/diamond_atlas.json';
import diamondPng from '../assets/images/diamond/diamond.png';

class Preloader extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
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
    this.load.image('title1', title1);
    this.load.image('title2', title2);
    this.load.image('greenButton1', greenButton1);
    this.load.image('greenButton2', greenButton2);
    this.load.image('checkbox1', checkbox1);
    this.load.image('checkbox2', checkbox2);
    this.load.audio('bgMusic', bgMusic);
    this.load.image('scoreTitle', scoreTitle);
    this.load.image('menuImg', menuImg);
    this.load.image('leaderboardImg', leaderboardImg);
    this.load.image('leaderboardTitle', leaderboardTitle);
    this.load.image('gameOverTitle', gameOverTitle);
    this.load.image('bgImg', bgImg);
    this.load.image('bgImgTop', bgImgTop);
    this.load.image('bgImgBottom', bgImgBottom);
    this.load.image('bigClouds', bigClouds);
    this.load.atlas('terrain', terrain, terrainJSON);
    this.load.json('pirate_anim', pirateAnim);
    this.load.atlas('pirate', piratePng, pirate);
    this.load.json('diamond_anim', diamondAnim);
    this.load.atlas('diamond', diamondPng, diamond);
  }

  ready() {
    this.scene.start('Title');
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}

export default Preloader;