
var _backgroundimage = "https://i.imgur.com/elutwop.jpg";
var _servername = "Voltstar Cinema";
var _mapname = "Loading...";
var _steamid = "";

function Update() {
	var str = "url(" + _backgroundimage + ")";
	document.body.style.backgroundImage = str;
	document.getElementById("title").innerHTML = _servername;
	document.getElementById("map").innerHTML = _mapname;
}

function init() {
	Update();
}

function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language) {
	_mapname = mapname;
	_steamid = steamid;
	Update();
}

function SetFilesTotal(total) {

}

function DownloadingFile(fileName) {

}

function SetStatusChanged(status) {

}

function SetFilesNeeded(needed) {

}
