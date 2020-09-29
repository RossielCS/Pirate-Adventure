/* eslint-disable no-underscore-dangle */
import Phaser from 'phaser';

class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key1, key2, text, targetScene, scale) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.button = this.scene.add.sprite(0, 0, key1).setInteractive();
    this.button.setScale(scale);
    this.text = this.scene.add.text(0, 0, text, { fontSize: '17px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.text, this.button);

    this.add(this.button);
    this.add(this.text);

    this.button.on('pointerdown', () => {
      const table = document.getElementsByTagName('table')[0];
      if (table) table.remove();
      this.scene.scene.start(targetScene);
    });

    this.button.on('pointerover', () => {
      this.button.setTexture(key2);
    });

    this.button.on('pointerout', () => {
      this.button.setTexture(key1);
    });

    this.scene.add.existing(this);
  }
}

export default Button;