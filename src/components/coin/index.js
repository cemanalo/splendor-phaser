import Phaser from 'phaser'

import config from './config'

export default class Coin extends Phaser.GameObjects.Container {
  constructor(scene, x, y, opts) {
    const stone = opts && opts.stone? opts.stone : 'onyx'

    const bg = scene.add.arc(config.radius + .5, config.radius + .5, config.radius + 1, 0, 360, false, config.colors.bg, 1)
    const coin = scene.add.arc(config.radius, config.radius, config.radius, 0, 360, false, config.colors[stone], 1)

    super(scene, x, y, [bg,  coin])
    
    if(opts && opts.value) 
      this.add(scene.add.text(0, -4, opts.value, { color: stone === 'diamond' ? '#000000' : '#fff'}))

    scene.add.existing(this)
  }
}