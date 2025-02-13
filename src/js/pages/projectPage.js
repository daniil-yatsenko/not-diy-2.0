import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  gsap.registerPlugin(ScrollTrigger);

  const nextPage = data.next.container;
  const tl = gsap.timeline();
  let assets = nextPage.querySelectorAll(".project-assets_asset-wrapper");
  let hiddenImage = nextPage.querySelector("[cover-image-mobile]");
  if (window.innerWidth < 768)
    hiddenImage = nextPage.querySelector("[cover-image-desktop]");

  assets = [...assets].filter((asset) => asset !== hiddenImage);

  lenisMain.stop();

  gsap.set(assets, { x: "120%" });

  await defaultEnter();
  // tl.to(assets, {
  //   x: "",
  //   duration: 0.75,
  //   ease: "expo.inOut",
  //   delay: 1,
  //   stagger: 0.25,
  // });
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

  return tl.then(() => {
    lenisMain.start();
  });
};

export { projectEnter, projectLeave };
