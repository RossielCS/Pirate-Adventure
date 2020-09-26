/* eslint-disable no-underscore-dangle */
import Phaser from 'phaser';

class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key1, key2, text, targetScene, scale) {
    super(scene);
    this._scene = scene;
    this._x = x;
    this._y = y;

    this._button = this._scene.add.sprite(this._x, this._y, key1).setInteractive();
    this._button.setScale(scale);
    this._text = this._scene.add.text(0, 0, text, { fontSize: '17px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this._text, this._button);

    this.add(this._button);
    this.add(this._text);

    this._button.on('pointerdown', () => {
      this._scene.scene.start(targetScene);
    });

    this._button.on('pointerover', () => {
      this._button.setTexture(key2);
    });

    this._button.on('pointerout', () => {
      this._button.setTexture(key1);
    });

    this._scene.add.existing(this);
  }
}

export default Button;