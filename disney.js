function disney() {
    if(document.querySelector("#hudson-wrapper > div > div.btm-media-player.btm-media-player-idle > div.btm-media-overlays-container > div.overlay.overlay__skip > button")) {
        document.querySelector("#hudson-wrapper > div > div.btm-media-player.btm-media-player-idle > div.btm-media-overlays-container > div.overlay.overlay__skip > button").click();
    }
}
setInterval(disney, 1000);