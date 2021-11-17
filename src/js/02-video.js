
import throttle from "lodash.throttle";
import Player from "@vimeo/player";

const player = new Player(document.querySelector("#vimeo-player"));
const CURRENT_TIME = "videoplayer-current-time";

player.on("timeupdate", throttle(playerTime, 1000));

function playerTime(event) {
  localStorage.setItem(CURRENT_TIME, `${event.seconds}`);
}

if (localStorage.getItem(CURRENT_TIME)) {
  player.setCurrentTime(Number.parseFloat(localStorage.getItem(CURRENT_TIME)));
}
console.log(localStorage.getItem(CURRENT_TIME))
