import Phaser from 'phaser'

import * as SFS2X from "sfs2x-api"
import RoomList from '../components/ui/RoomList'
import Button from '../components/ui/button'
import {sfs} from '../sfs'
import * as randomstring  from 'randomstring'

export default class LobbyScene extends Phaser.Scene {
  constructor() {
    super({key: 'LobbyScene'})
  }

  create() {
    this.add.text(416, 50, 'Splendid', {fontSize: '40px'})

    this.add.line(0, 0, 512, 0, 512, 1600, 0xff0000)
    this.add.line(0, 0, 0, 400, 2048, 400, 0xff0000)

    this.roomList = new RoomList(this, 120, 250)
    new Button(this, 830, 200, 'Create', { pointerdown: this.onCreateButtonClick })
    sfs.addEventListener(SFS2X.SFSEvent.ROOM_ADD, this.onRoomCreated, this)
    sfs.addEventListener(SFS2X.SFSEvent.ROOM_REMOVE, this.onRoomRemoved, this);
    
    // sfs.send(new SFS2X.CreateSFSGameRequest(settings))
    // new RoomItem(this, 850, 150)
  }

  onCreateButtonClick() {
    var settings = new SFS2X.SFSGameSettings(randomstring.generate(6))
    settings.maxUsers = 4
    settings.maxSpectators = 0
    settings.isPublic = true;
    settings.minPlayersToStartGame = 2
    settings.notifyGameStarted = true

    sfs.send(new SFS2X.CreateSFSGameRequest(settings))
  }

  onRoomCreated(evt) {
    const room = evt.room
    this.roomList.addRoom(room)
  }

  onRoomRemoved(evt) {
    this.roomList.removeRoom(evt.room)
  }
}