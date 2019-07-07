import Phaser from 'phaser'
import * as SFS2X from 'sfs2x-api'

import Button from '../components/ui/button'

import { game } from '../index'
import {sfs, connect} from '../sfs'
import { login } from '../sfs/login'

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super({key: 'TitleScene'})
  }

  create() {
    this.add.text(390, 200, 'Splendid', {fontSize: '50px'})
    this.add.line(0, 0, 512, 0, 512, 1600, 0xff0000)
    this.add.line(0, 0, 0, 400, 2048, 400, 0xff0000)
    
    this.quickStart = new Button(this, 445, 400, 'Login as guest', { pointerdown: this.onLoginButtonClick})
    this.status = new Phaser.GameObjects.Text(this, 460, 270, 'Connecting...')

    this.quickStart.setEnable(false)
    this.add.existing(this.status)

    connect()
    sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, this.onConnection, this);
    sfs.addEventListener(SFS2X.SFSEvent.LOGIN, this.onLogin, this);

  }

  onLoginButtonClick() {
    login(sfs)
  }

  onConnection() {
    this.status.setText('Connected!')
    this.quickStart.setEnable(true)
  }

  onLogin() {
    game.scene.stop('TitleScene')
    game.scene.start('LobbyScene')
  }
  
}