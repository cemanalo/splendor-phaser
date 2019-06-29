import Phaser from "phaser";
import card1 from "./assets/cards/0.png";
import card2 from "./assets/cards/2.png";

import Card from './components/card'

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1024,
  height: 800,
  backgroundColor: 0x8a471e,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("card1", card1);
  this.load.image("card2", card2);
}

function create() {
  // const card1 = this.add.image(0, 0, "card1");
  // const card2 = this.add.image(0, 32, "card2");

  // const container = new Phaser.GameObjects.Container(this, 100, 100, [card1, card2])
  const card = new Card(this, 10, 10, {stone: 'sapphire', costs: [
    {
      stone: 'diamond',
      value: 3
    },
    {
      stone: 'ruby',
      value: 1
    },
    {
      stone: 'sapphire',
      value: 2
    }
  ]})
  new Card(this, 120, 10, {stone: 'ruby'})
  new Card(this, 120, 40, {stone: 'diamond'})
  // this.add.existing(container)
}
