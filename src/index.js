import Phaser from "phaser";

import TitleScene from './scenes/title'
import LobbyScene from './scenes/lobby'
import setup from './board/setup'
// import { connect } from './sfs'

const titleScene = new TitleScene()
const lobbyScene = new LobbyScene()

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1024,
  height: 800,
  backgroundColor: 0x8a471e,
};

export const game  = new Phaser.Game(config);

game.scene.add('TitleScene', titleScene)
game.scene.add('LobbyScene', lobbyScene)
game.scene.start('TitleScene')
// game.scene.start('LobbyScene')


// let sfs;

// function preload() {
//   // this.load.image("card1", card1);
//   // this.load.image("card2", card2);
// }

// function create() {
//   sfs = connect()
//   setup(this)

// }
