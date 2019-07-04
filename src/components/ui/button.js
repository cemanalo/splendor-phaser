import Phaser from 'phaser'

export default class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, text, opts = {}) {
    const len = text.length
    const width = (len * 10) + 20
    const bg = new Phaser.GameObjects.Rectangle(scene, width / 2 -12, 10, width, 25, 0x000000)
    const textObj = new Phaser.GameObjects.Text(scene, 0, 0, text)
    super(scene, x, y)

    this.add(bg)
    this.add(textObj)
    bg.setInteractive()

    bg.on('pointerdown', () => {
      if (opts.pointerdown) 
        opts.pointerdown()
      else 
        console.log(`${text} on pointer down`)
    })
    scene.add.existing(this)


  }
}