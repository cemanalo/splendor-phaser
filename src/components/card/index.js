import  Phaser  from 'phaser'

import config from './config'
import Coin from '../coin'

export default class Card extends Phaser.GameObjects.Container {
  constructor(scene, x, y, opts) {
    const stone = opts && opts.discount? opts.discount : 'onyx'

    const bottomRect = scene.add.rectangle(config.width / 2, config.height / 2, config.width, config.height, config.colors[stone], 1)
    const headRect  = scene.add.rectangle(config.width / 2, config.header.height / 2, config.width, config.header.height, config.header.color,  .5)
    
    // scene.add.text(7, 5, '1', { color: stone === 'diamond' ? '#000000' : '#fff'})
  
    const discount = new Coin(scene, 80, 8, {stone})

    super(scene, x, y, [bottomRect, headRect, discount])
    
    if(opts.points != '0') this.add(new Phaser.GameObjects.Text(scene, 7, 5, opts.points, { color: stone === 'diamond' ? '#000000' : '#fff'}))

    this.addCost(scene, this.costsToArrays(opts))

    scene.add.existing(this)
  }

  addCost(scene, costs) {
    const reverse = costs.reverse()

    for(var i in reverse) 
      this.add(new Coin(scene, 80, 103 - (i * 23), {stone: reverse[i].stone, value: reverse[i].value}))
  }

  costsToArrays(opts) {
    const costs = []
    if(opts.diamond != '0') costs.push({ stone: 'diamond', value: opts.diamond})
    if(opts.sapphire != '0') costs.push({ stone: 'sapphire', value: opts.sapphire})
    if(opts.emerald != '0') costs.push({ stone: 'emerald', value: opts.emerald})
    if(opts.ruby != '0') costs.push({ stone: 'ruby', value: opts.ruby})
    if(opts.onyx != '0') costs.push({ stone: 'onyx', value: opts.onyx})

    return costs
  }
}