import  Phaser  from 'phaser'

import config from './config'
import cardConfig from '../card/config'

export default class Noble extends Phaser.GameObjects.Container {
  constructor(scene, x, y, opts = {}) {
    const noble = scene.add.rectangle(config.width / 2, config.height / 2, config.width, config.height, config.color, 1)
    const score = new Phaser.GameObjects.Text(scene, 6, 5, opts.score)

    super(scene, x, y, [noble, score])

    this.addCost(scene, opts.costs)
    scene.add.existing(this)
  }

  addCost(scene, costs = []) {
    for(var i in costs)
      this.add(new Card(scene, 65, 5 + (27 * i), costs[i]))
  }
}

class Card extends Phaser.GameObjects.Container {
  constructor(scene, x, y, opts) {
    const color = cardConfig.colors[opts.card]
    const card = new Phaser.GameObjects.Rectangle(scene, 10, 13, 20, 25, color, 1)
    const cost = new  Phaser.GameObjects.Text(scene, 6, 5, opts.value )
    
    super(scene, x, y, [card, cost])
  }
}