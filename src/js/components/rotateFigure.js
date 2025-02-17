import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const figureInit = (page) => {
  gsap.registerPlugin(ScrollTrigger);

  let figures = page.querySelectorAll("[animated-figure]");
  let tl = gsap.timeline();

  let mainWrapper = page;
  if (page === document) {
    // remap on site first load
    mainWrapper = page.querySelector(".main-wrapper");
  }

  figures.forEach((figure) => {
    // may receive following attributes:
    // trigger="self";
    // rotate-degrees="{int}"
    // paralax="true"

    let rotation = figure.getAttribute("rotate-degrees");
    let offsetY = "0";

    if (!rotation) rotation = 60;
    if (figure.getAttribute("paralax") == "true") {
      offsetY = mainWrapper.offsetHeight / 1.8;
    }

    if (figure.getAttribute("trigger") == "self") {
      tl.to(figure, {
        rotate: rotation,
        y: offsetY,
        ease: "linear",
        scrollTrigger: {
          trigger: figure,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    } else {
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
    }
  });
};

const figureCleanup = (page) => {
  ScrollTrigger.killAll();
};

export { figureInit, figureCleanup };
