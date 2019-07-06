import * as SFS2X from "sfs2x-api";

let sfs

export const login = (SFS) => {
  sfs = SFS
  sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, onLoginError, this);
  sfs.addEventListener(SFS2X.SFSEvent.LOGIN, onLogin, this);
  sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, onRoomJoinError, this);
  sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, onRoomJoin, this);

  sfs.send(new SFS2X.LoginRequest())
}

function onLogin(event) {
  console.log("Login successful!" +
      "\n\tZone: " + event.zone +
      "\n\tUser: " + event.user)
}

function onLoginError(event) {
  var error = "Login error: " + event.errorMessage + " (code " + event.errorCode + ")"
  console.log(error)
}

function onRoomJoinError(event) {
  console.log("Room join error: " + event.errorMessage + " (code: " + event.errorCode + ")", true)
}

function onRoomJoin(event) {
  console.log("Room joined: " + event.room)
}
