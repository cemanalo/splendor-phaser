import Phaser from 'phaser'

import RoomItem from '../components/ui/roomItem'

export default class LobbyScene extends Phaser.Scene {
  constructor() {
    super({key: 'LobbyScene'})
  }

  create() {
    this.add.text(416, 50, 'Splendid', {fontSize: '40px'})

    this.add.line(0, 0, 512, 0, 512, 1600, 0xff0000)
    this.add.line(0, 0, 0, 400, 2048, 400, 0xff0000)

    new RoomItem(this, 50, 150)
  }
}