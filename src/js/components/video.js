import Player from "@vimeo/player";
import { gsap } from "gsap";

const initVimeoPlayer = (page) => {
  const vimeoPlayers = page.querySelectorAll("[data-vimeo-player-init]");

  vimeoPlayers.forEach(function (vimeoElement, index) {
    const vimeoVideoID = vimeoElement.getAttribute("data-vimeo-video-id");
    if (!vimeoVideoID) return;
    const vimeoVideoURL = `https://player.vimeo.com/video/${vimeoVideoID}?api=1&background=1&autoplay=1&loop=1&muted=1`;
    vimeoElement.querySelector("iframe").setAttribute("src", vimeoVideoURL);

    // Assign an ID to each element
    const videoIndexID = "vimeo-player-index-" + index;
    vimeoElement.setAttribute("id", videoIndexID);

    const iframeID = vimeoElement.id;
    const player = new Player(iframeID);
    const placeholder = vimeoElement.querySelector(
      ".vimeo-player__placeholder"
    );

    player.getVideoWidth().then(function (width) {
      player.getVideoHeight().then(function (height) {
        const beforeEl = vimeoElement.querySelector(".vimeo-player__before");
        if (beforeEl) {
          beforeEl.style.paddingTop = (height / width) * 100 + "%";
        }
      });
    });

    // Loaded
    player.on("play", function () {
      vimeoElement.setAttribute("data-vimeo-loaded", "true");
      gsap.to(placeholder, { opacity: 0 });
    });

    // error
    player.on("error", function (error) {
      gsap.set(placeholder, { opacity: 1 });
      gsap.set(vimeoElement.querySelector("iframe"), { opacity: 0 });
      console.error(`Vimeo Player ${index} Error:`, error);
    });
  });

  const stills = page.querySelectorAll('[data-vimeo-video-id=""]');

  stills.forEach((still) => {
    const height = still.querySelector("img").offsetHeight;
    console.log(height);

    gsap.set(still.parentElement, {
      height: `${height / 16}rem`,
      display: "flex",
    });
  });
};

const vimeoCleanup = (page) => {
  const videoIframes = page.querySelectorAll("iframe");

  videoIframes.forEach((iframe) => {
    if (iframe.src.includes("vimeo.com")) {
      const playerInstance = new Player(iframe);

      playerInstance
        .destroy()
        .then(() => {})
        .catch((error) => {
          console.error("Error destroying player:", error);
        });
    }
  });
};

export { initVimeoPlayer, vimeoCleanup };
