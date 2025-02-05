import { gsap } from "gsap";

// credits: osmo.supply

function thumbnailOnHover(event) {
  const magnet = event.currentTarget;
  const bounding = magnet.getBoundingClientRect();
  const strength = 15;
  const innerTarget = magnet.children;
  const innerStrength = 15;

  const offsetX =
    ((event.clientX - bounding.left) / magnet.offsetWidth - 0.5) *
    (strength / 16);
  const offsetY =
    ((event.clientY - bounding.top) / magnet.offsetHeight - 0.5) *
    (strength / 16);

  gsap.to(magnet, {
    x: offsetX + "em",
    y: offsetY + "em",
    rotate: "0.001deg",
    ease: "power4.out",
    duration: 0.6,
  });

  if (innerTarget) {
    const innerOffsetX =
      ((event.clientX - bounding.left) / magnet.offsetWidth - 0.5) *
      (innerStrength / 16);
    const innerOffsetY =
      ((event.clientY - bounding.top) / magnet.offsetHeight - 0.5) *
      (innerStrength / 16);

    gsap.to(innerTarget, {
      x: innerOffsetX + "em",
      y: innerOffsetY + "em",
      rotate: "0.001deg",
      ease: "power2.out",
      duration: 1,
    });
  }
}

function thumbnailOffHover(event) {
  const magnet = event.currentTarget;
  const innerTarget = magnet.firstChild;

  gsap.to(magnet, {
    x: "0em",
    y: "0em",
    ease: "elastic.out(1, 0.3)",
    duration: 0.8,
  });

  if (innerTarget) {
    gsap.to(innerTarget, {
      x: "0em",
      y: "0em",
      ease: "elastic.out(1, 0.3)",
      duration: 1.2,
    });
  }
}

/////////////////////////////////////

const thumbnailsInit = (page) => {
  let thumbnails = page.querySelectorAll(".project-thumbnail_image-wrapper");

  thumbnails.forEach((thumbnail) => {
    gsap.set(thumbnail.children, { scale: 1.05 });
    thumbnail.addEventListener("mousemove", thumbnailOnHover);
    thumbnail.addEventListener("mouseleave", thumbnailOffHover);
  });
};

const thumbnailsCleanup = (page) => {
  let thumbnails = page.querySelectorAll(".project-thumbnail_image-wrapper");

  thumbnails.forEach((thumbnail) => {
    thumbnail.removeEventListener("mousemove", thumbnailOnHover);
    thumbnail.removeEventListener("mouseleave", thumbnailOffHover);
  });
};

export { thumbnailsInit, thumbnailsCleanup };
