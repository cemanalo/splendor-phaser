import  Phaser  from 'phaser'

import config from './config'
import Coin from '../coin'

export default class Card extends Phaser.GameObjects.Container {
  constructor(scene, x, y, opts) {
    const stone = opts && opts.stone? opts.stone : 'onyx'

    const bottomRect = scene.add.rectangle(config.width / 2, config.height / 2, config.width, config.height, config.colors[stone], 1)
    const headRect  = scene.add.rectangle(config.width / 2, config.header.height / 2, config.width, config.header.height, config.header.color,  .5)
    const score = scene.add.text(7, 5, '1', { color: stone === 'diamond' ? '#000000' : '#fff'})
  
    const discount = new Coin(scene, 80, 8)

    super(scene, x, y, [bottomRect, headRect, score, discount])
    
    if (opts.costs) this.addCost(scene, opts.costs)

    scene.add.existing(this)
  }

  addCost(scene, costs) {
    const reverse = costs.reverse()

    for(var i in reverse) 
      this.add(new Coin(scene, 80, 100 - (i * 23), {stone: reverse[i].stone, value: reverse[i].value}))
  }
}