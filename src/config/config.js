import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 680,
  height: 400,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
};

export default config;