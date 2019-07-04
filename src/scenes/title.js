import Phaser from 'phaser'

import Button from '../components/ui/button'
import { game } from '../index'

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super({key: 'TitleScene'})
  }

  create() {
    this.add.text(400, 200, 'Splendid', {fontSize: '50px'})
    this.add.line(0, 0, 512, 0, 512, 1600, 0xff0000)
    this.add.line(0, 0, 0, 400, 2048, 400, 0xff0000)
    
    new Button(this, 460, 400, 'Quick Start', { pointerdown: this.onQuickStart})
    
  }

  onQuickStart() {
    console.log('onQuickStart')
    game.scene.stop('TitleScene')
    game.scene.start('LobbyScene')
  }
}