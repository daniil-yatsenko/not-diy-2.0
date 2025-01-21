import { gsap } from "gsap";

function thumbnailOnHover(thumbnail) {
  return gsap.to(thumbnail, {
    y: "-=0.25rem",
    ease: "back.inOut(1.7)",
    duration: 0.3,
  });
}

function thumbnailOffHover(thumbnail) {
  return gsap.to(thumbnail, { y: "", duration: 0.3 });
}

/////////////////////////////////////

const thumbnailsInit = (page) => {
  let thumbnails = page.querySelectorAll("[placeholder-tag]"); // rewrite later

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("mouseenter", () => thumbnailOnHover(thumbnail));
    thumbnail.addEventListener("mouseleave", () =>
      thumbnailOffHover(thumbnail)
    );
  });
};

const thumbnailsCleanup = (page) => {
  let thumbnails = page.querySelectorAll("[placeholder-tag]"); // rewrite later

  thumbnails.forEach((thumbnail) => {
    thumbnail.removeEventListener("mouseenter", thumbnailOnHover);
    thumbnail.removeEventListener("mouseleave", thumbnailOffHover);
  });
};

export { thumbnailsInit, thumbnailsCleanup };
