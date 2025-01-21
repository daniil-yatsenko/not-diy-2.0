import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const figureInit = (page = document) => {
  gsap.registerPlugin(ScrollTrigger);

  let figures = page.querySelectorAll("[animated-figure]");
  let tl = gsap.timeline();

  figures.forEach((figure) => {
    tl.to(figure, {
      rotate: 60,
      ease: "linear",
      scrollTrigger: {
        trigger: figure,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
};

const figureCleanup = (page) => {
  ScrollTrigger.killAll();
};

export { figureInit, figureCleanup };
