import shuffle from 'lodash/shuffle'

import Card from '../components/card'

import Level1Cards from '../components/card/contents/level_1'
import Level2Cards from '../components/card/contents/level_2'
import Level3Cards from '../components/card/contents/level_3'

export default (scene) => {
  const shuffledL1Cards = shuffle(Level1Cards)
  const shuffledL2Cards = shuffle(Level2Cards)
  const shuffledL3Cards = shuffle(Level3Cards)

  const xs = 20
  const ys = 120

  for(var i = 0; i < 4; i++) {
    new Card(scene, xs + (120 * i), ys, shuffledL1Cards.pop())
    new Card(scene, xs + (120 * i), ys + 150, shuffledL2Cards.pop())
    new Card(scene, xs + (120 * i), ys + 300, shuffledL3Cards.pop())
  }

}