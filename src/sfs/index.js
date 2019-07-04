import * as SFS2X from "sfs2x-api";
import { login } from './login'

let sfs

export const connect = () => {
  var config = {}
  config.host = 'localhost'
  config.port = 8080
  config.debug = true
  config.useSSL = false
  config.zone = 'Splendor'
  
  sfs = new SFS2X.SmartFox(config);
  
  // Set logging
  sfs.logger.level = SFS2X.LogLevel.INFO;
  sfs.logger.enableConsoleOutput = true;
  sfs.logger.enableEventDispatching = true;

  sfs.logger.addEventListener(SFS2X.LoggerEvent.DEBUG, onDebugLogged, this);
  sfs.logger.addEventListener(SFS2X.LoggerEvent.INFO, onInfoLogged, this);
  sfs.logger.addEventListener(SFS2X.LoggerEvent.WARNING, onWarningLogged, this);
  sfs.logger.addEventListener(SFS2X.LoggerEvent.ERROR, onErrorLogged, this);
  
  // Add event listeners
  sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, onConnection, this);
  sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, onConnectionLost, this);
  
  sfs.connect()

  return sfs
}

//------------------------------------
// LOGGER EVENT HANDLERS
//------------------------------------

function onDebugLogged(event)
{
	trace(event.message, "DEBUG", true);
}

function onInfoLogged(event)
{
	trace(event.message, "INFO", true);
}

function onWarningLogged(event)
{
	trace(event.message, "WARN", true);
}

function onErrorLogged(event)
{
	trace(event.message, "ERROR", true);
}

//------------------------------------
// SFS EVENT HANDLERS
//------------------------------------

function onConnection(event)
{
	if (event.success)
	{
    trace("Connected to SmartFoxServer 2X!<br>SFS2X API version: " + sfs.version);
    login(sfs)
	}
	else
	{
		trace("Connection failed: " + (event.errorMessage ? event.errorMessage + " (" + event.errorCode + ")" : "Is the server running at all?"));

		// Reset
		reset();
	}
}

function onConnectionLost(event)
{
	trace("Disconnection occurred; reason is: " + event.reason);

	// Reset
	reset();
}

function reset()
{
	// Remove SFS2X listeners
	sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION, onConnection);
	sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION_LOST, onConnectionLost);
	
	sfs.logger.removeEventListener(SFS2X.LoggerEvent.DEBUG, onDebugLogged);
	sfs.logger.removeEventListener(SFS2X.LoggerEvent.INFO, onInfoLogged);
	sfs.logger.removeEventListener(SFS2X.LoggerEvent.WARNING, onWarningLogged);
	sfs.logger.removeEventListener(SFS2X.LoggerEvent.ERROR, onErrorLogged);
	
	sfs = null;
}

function trace(message, prefix) {
  // if(isDebug)
  console.log(`${prefix || ''}: ${message}`)
}