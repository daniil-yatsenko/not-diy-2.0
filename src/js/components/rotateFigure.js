import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const figureInit = (page = document) => {
  gsap.registerPlugin(ScrollTrigger);

  let figures = page.querySelectorAll("[animated-figure]");
  let tl = gsap.timeline();

  const mainWrapper = page.querySelector(".main-wrapper");

  figures.forEach((figure) => {
    let rotation = figure.getAttribute("rotate-degrees");
    if (!rotation) rotation = 60;

    let offsetY = "0";
    if (figure.getAttribute("paralax") == "true") {
      offsetY = mainWrapper.offsetHeight / 1.8;
    }

    tl.to(figure, {
      rotate: rotation,
      y: offsetY,
      ease: "linear",
      scrollTrigger: {
        trigger: mainWrapper,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });
};

const figureCleanup = (page) => {
  ScrollTrigger.killAll();
};

export { figureInit, figureCleanup };
