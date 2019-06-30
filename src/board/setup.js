import Phaser from "phaser"
import shuffle from 'lodash/shuffle'

import Card from '../components/card'
import Noble from '../components/noble'

import Level1Cards from '../components/card/contents/level_1'

export default (scene) => {
  const shuffledL1Cards = shuffle(Level1Cards)
  const xs = 20
  const ys = 120
  console.log(shuffledL1Cards)
  for(var i = 0; i < 4; i++) {
    new Card(scene, xs + (120 * i), ys, shuffledL1Cards.pop())
  }

  console.log(shuffledL1Cards)
}