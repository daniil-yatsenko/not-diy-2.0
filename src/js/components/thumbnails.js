import { gsap } from "gsap";

// Stores event listeners to remove them later during clean up
const eventListenersMap = new WeakMap();

function smallThumbnailOnHover(thumbnail) {
  return () =>
    gsap.to(thumbnail, {
      y: "-=0.25rem",
      ease: "back.inOut(1.7)",
      duration: 0.3,
    });
}

function smallThumbnailOffHover(thumbnail) {
  return () => gsap.to(thumbnail, { y: "", duration: 0.3 });
}

/////////////////////////////////////

const thumbnailsInit = (page) => {
  let thumbnails = page.querySelectorAll("[placeholder-tag]"); // rewrite later

  thumbnails.forEach((thumbnail) => {
    const hoverInListener = smallThumbnailOnHover(thumbnail);
    const hoverOutListener = smallThumbnailOffHover(thumbnail);

    eventListenersMap.set(thumbnail, { hoverInListener, hoverOutListener });

    thumbnail.addEventListener("mouseenter", hoverInListener);
    thumbnail.addEventListener("mouseleave", hoverOutListener);
  });
};

const thumbnailsCleanup = (page) => {
  let thumbnails = page.querySelectorAll("[placeholder-tag]"); // rewrite later

  thumbnails.forEach((thumbnail) => {
    const listeners = eventListenersMap.get(thumbnail);
    if (listeners) {
      thumbnail.removeEventListener("mouseenter", listeners.hoverInListener);
      thumbnail.removeEventListener("mouseleave", listeners.hoverOutListener);
      eventListenersMap.delete(thumbnail);
    }
  });
};

export { thumbnailsInit, thumbnailsCleanup };
