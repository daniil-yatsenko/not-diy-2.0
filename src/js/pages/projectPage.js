import { gsap } from "gsap";
import { defaultLeave, defaultEnter } from "../global/globalTransitions";
import { thumbnailsCleanup } from "../components/thumbnails";
import { lenisMain } from "../global/globalInit";

const projectLeave = async (currentPage, nextPath) => {
  const currentImage = [...currentPage.querySelectorAll("a")].find(
    (a) => a.getAttribute("href") === nextPath
  );

  if (currentImage) {
    lenisMain.stop();
    thumbnailsCleanup(currentPage);
    gsap.to(currentImage, { x: "-100vw", duration: 0.75, ease: "expo.inOut" });
  }

  await defaultLeave();
};

const projectEnter = async (data) => {
  const nextPage = data.next.container;
  const tl = gsap.timeline();
  let assets = nextPage.querySelectorAll(".project-assets_asset-wrapper");
  let hiddenImage = nextPage.querySelector("[cover-image-mobile]");
  if (window.innerWidth < 768)
    coverImage = nextPage.querySelector("[cover-image-desktop]");

  assets = [...assets].filter((asset) => asset !== hiddenImage);

  lenisMain.stop();
  tl.set(assets, { x: "100vw" });
  defaultEnter();
  tl.to(assets, {
    x: "",
    duration: 0.75,
    ease: "expo.inOut",
    delay: 1,
    stagger: 0.25,
  });

  return tl.then(() => {
    lenisMain.start();
  });
};

export { projectEnter, projectLeave };
