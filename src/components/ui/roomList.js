import Phaser from 'phaser'

import RoomItem from './roomItem'

export default class RoomList extends Phaser.GameObjects.Container {
  constructor(scene, x, y, opts = {}) {
    super(scene, x, y)

    this.rooms = []
    // new RoomItem(this, 200, 0)
    // new RoomItem(this, 400, 0)
    // new RoomItem(this, 600, 0)
    // new RoomItem(this, 0, 100)

    // this.add(new RoomItem(scene, 0, 0))
    // this.add(new RoomItem(scene, 200, 0))
    // this.add(new RoomItem(scene, 400, 0))
    // this.add(new RoomItem(scene, 600, 0))

    // this.add(new RoomItem(scene, 0, 100))
    // this.add(new RoomItem(scene, 200, 100))
    // this.add(new RoomItem(scene, 400, 100))
    // this.add(new RoomItem(scene, 600, 100))

    // this.add(new RoomItem(scene, 0, 200))
    // this.add(new RoomItem(scene, 200, 200))
    // this.add(new RoomItem(scene, 400, 200))
    // this.add(new RoomItem(scene, 600, 200))

    scene.add.existing(this)

  }
}
