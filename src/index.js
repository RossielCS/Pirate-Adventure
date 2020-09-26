import Phaser from 'phaser';
import './assets/stylesheets/style.scss';
import { config } from './config/config';
import Boot from './scenes/boot';
import Preloader from './scenes/preloader';
import Options from './scenes/options';
import Credits from './scenes/credits';
import Title from './scenes/title';
import Game from './scenes/game';
import GameOver from './scenes/game-over';
import Score from './scenes/score';
import Model from './modules/model';

class GameManager extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', Boot);
    this.scene.add('Preloader', Preloader);
    this.scene.add('Options', Options);
    this.scene.add('Credits', Credits);
    this.scene.add('Title', Title);
    this.scene.add('Game', Game);
    this.scene.add('GameOver', GameOver);
    this.scene.add('Score', Score);
    this.scene.start('Boot');
  }
}

window.game = new GameManager();
const model = new Model();
window.game.globals = { model, bgMusic: null };