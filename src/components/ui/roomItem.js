import Phaser from 'phaser'

export default class RoomItem extends Phaser.GameObjects.Container {
  constructor(scene, x, y, opts = {}) {
    super(scene, x, y)

    const width = 180
    const height = 80
    const boarder = new Phaser.GameObjects.Rectangle(scene, width / 2, height / 2, width, height, 0x00000)
    this.background = new Phaser.GameObjects.Rectangle(scene, (width -1) / 2, (height -1) / 2, width -10, height -10, 0x163463)
    const roomName = new Phaser.GameObjects.Text(scene, 10, 10, opts.name)
    this.roomCount = new Phaser.GameObjects.Text(scene, 120, 10, `(0/4)`)
    const join = new Phaser.GameObjects.Text(scene, 120, 50, 'Join')

    this.add(boarder)
    this.add(this.background)
    this.add(roomName)
    this.add(this.roomCount)
    this.add(join)

    this.background.setInteractive()

    scene.add.existing(this)
  }

  updateRoom(user, max) {
    this.roomCount.setText(`(${user}/${max})`)
  }


}