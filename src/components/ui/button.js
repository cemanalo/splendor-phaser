import Phaser from 'phaser'

export default class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, text, opts = {}) {
    const len = text.length
    const width = (len * 10) + 20
    super(scene, x, y)

    this.bg = new Phaser.GameObjects.Rectangle(scene, width / 2 -12, 10, width, 25, 0x000000)
    this.textObj = new Phaser.GameObjects.Text(scene, 0, 0, text)

    this.isEnable = true
  
    this.add(this.bg)
    this.add(this.textObj)
    this.bg.setInteractive()

    this.bg.on('pointerdown', () => {

      if (this.isEnable) {
        if (opts.pointerdown) 
          opts.pointerdown()
        else 
          console.log(`${text} on pointer down`)
      }
    })

    scene.add.existing(this)
  }

  setEnable(isEnable) {
    this.bg.fillAlpha = isEnable ? 1 : .5
    this.textObj.alpha = isEnable ? 1 : .5
  }
}