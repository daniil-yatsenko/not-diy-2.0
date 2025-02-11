import { gsap } from "gsap";
import { defaultLeave, defaultEnter } from "../global/globalTransitions";
import { thumbnailsCleanup } from "../components/thumbnails";

const overlay = document.querySelector(".overlay");
const loader = overlay.querySelector(".loader");
const navbar = document.querySelector(".navbar");

const projectLeave = async (data) => {
  const currentPage = data.current.container;
  const path = data.next.url.path;
  const currentImage = [...currentPage.querySelectorAll("a")].find(
    (a) => a.getAttribute("href") === path
  );
  if (!currentImage) return defaultLeave();

  let tl = gsap.timeline();
  thumbnailsCleanup(currentPage);

  tl.set(loader, { display: "flex", opacity: "" });
  tl.set(overlay, { y: "-120vh", display: "block" });
  tl.to(currentImage, { x: "-100vw", duration: 0.75, ease: "expo.inOut" }, "<");
  tl.to(navbar, { y: "-100%", ease: "expo.inOut", duration: 0.5 }, "<");
  tl.to(overlay, { y: "", duration: 1, delay: -0.4, ease: "expo.inOut" });

  tl.set(navbar, { y: "" });

  return tl.then(() => {});
};

const projectEnter = async (data) => {
  const nextPage = data.next.container;
  const image = nextPage.querySelector("[cover-image-desktop]");
  let tl = gsap.timeline();

  tl.set(overlay, { y: "", display: "block" });
  tl.set(navbar, { y: "-100%" });

  tl.set(image, { x: "100vw", duration: 0.75, ease: "expo.inOut" });
  tl.to(
    overlay,
    { y: "100vh", duration: 1, ease: "expo.inOut", delay: 0.3 },
    "<"
  );
  tl.to(image, { x: "", duration: 0.75, ease: "expo.inOut", delay: -0.5 });
  tl.to(navbar, {
    y: "",
    ease: "expo.inOut",
    duration: 0.5,
    delay: -0.2,
  });

  tl.set(loader, { display: "none", opacity: "" });
  tl.set(overlay, { opacity: 1, y: "", display: "none" });

  return tl.then(() => {});
};

export { projectEnter, projectLeave };
