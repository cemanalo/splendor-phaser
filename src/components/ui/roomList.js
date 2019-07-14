import Phaser from 'phaser'
import remove from 'lodash/remove'

import RoomItem from './roomItem'

export default class RoomList extends Phaser.GameObjects.Container {
  constructor(scene, x, y, opts = {}) {
    super(scene, x, y)
    this.scene = scene
    this.rooms = []

    this.maxCol = 4
    this.rowSpaces = 200
    this.colSpaces = 100

    scene.add.existing(this)

  }

  addRoom(room) {
    this.rooms.unshift(room)
    this.updateRoomList()

  }

  removeRoom(room) {
    remove(this.rooms, { name: room.name })
    this.updateRoomList()
  }

  updateRoomList() {
    this.removeAll()
    const len = this.rooms.length
    const maxRow = Math.ceil(len / this.maxCol)

    for (var y = 0; y < maxRow; y++) {
      var x = 0
      
      while(x < this.maxCol) {
        const xAxis = x * this.rowSpaces
        const yAxis = y * this.colSpaces
        const index = (y * this.maxCol) + x
        
        const room = this.rooms[index]

        this.add(new RoomItem(this.scene, xAxis, yAxis, room))
        if (index + 1 >= len) break

        x++
      }
    }

  }
}
