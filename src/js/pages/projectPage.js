import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { defaultLeave, defaultEnter } from "../global/globalTransitions";
import { thumbnailsCleanup } from "../components/thumbnails";

const projectLeave = async (currentPage, nextPath) => {
  const currentImage = [...currentPage.querySelectorAll("a")].find(
    (a) => a.getAttribute("href") === nextPath
  );

  if (currentImage) {
    thumbnailsCleanup(currentPage);
    gsap.to(currentImage, { x: "-100vw", duration: 0.75, ease: "expo.inOut" });
  }

  await defaultLeave();
};

const projectEnter = async (data) => {
  gsap.registerPlugin(ScrollTrigger);

  const nextPage = data.next.container;
  const tl = gsap.timeline();
  let assets = nextPage.querySelectorAll(".project-assets_asset-wrapper");
  let hiddenImage = nextPage.querySelector("[cover-image-mobile]");
  if (window.innerWidth < 768)
    hiddenImage = nextPage.querySelector("[cover-image-desktop]");

  assets = [...assets].filter((asset) => asset !== hiddenImage);

  gsap.set(assets, { x: "120%" });

  await defaultEnter();

  assets.forEach((asset) => {
    ScrollTrigger.create({
      trigger: asset,
      start: "top 90%",
      end: "bottom 10%",
      onEnter: () => {
        gsap.to(asset, { x: "0%", ease: "expo.inOut", duration: 0.75 });
      },
      onLeaveBack: () => {
        gsap.to(asset, { x: "120%", ease: "expo.inOut", duration: 0.75 });
      },
    });
  });

  return tl.then(() => {});
};

export { projectEnter, projectLeave };
