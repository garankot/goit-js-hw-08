
import throttle from "lodash.throttle";
import Player from "@vimeo/player";

const player = new Player(document.querySelector("#vimeo-player"));
const CURRENT_TIME = "videoplayer-current-time";

player.on("currenttime", throttle(currenttime, 1000));

if (localStorage.getItem(CURRENT_TIME)) {
  player.setCurrentTime(Number.parseFloat(localStorage.getItem(CURRENT_TIME)));
}

function currenttime(event) {
  localStorage.setItem(CURRENT_TIME, event.seconds === event.duration ? 0 : event.seconds);
}

const onPlay = function(data) {
};

player.on("play", onPlay);