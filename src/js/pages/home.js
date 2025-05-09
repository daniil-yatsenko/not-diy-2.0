import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lenisMain } from "../global/globalInit.js";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { playHomeEnter } from "../animationConfig";
import { blockInteractions } from "../global/blockInteractions";
import { navbar } from "../global/navigation";

const homeEnter = async (page) => {
  // calculate the height of circle's drop on homeEnter
  function calcHeight(image) {
    return -(image.offsetHeight + window.innerHeight) / 2;
  }

  lenisMain.scrollTo(0, { force: true, immediate: true });
  gsap.registerPlugin(ScrambleTextPlugin);
  const overlay = document.querySelector(".overlay");
  const loader = document.querySelector(".loader");
  const circle = page.querySelector("[hero-image]");
  const text = page.querySelector(".hero_text-wrapper").firstChild;
  let tl = gsap.timeline();
  let origString = text.innerHTML;

  if (playHomeEnter == false) {
    gsap.set([overlay, loader], { display: "none" });
    return;
  }

  blockInteractions(true);
  tl.set(text, { y: "10rem", scrambleText: { text: "■■■■■■■■■■■■■■■■■■■■" } });

  navbar.hide({ immediate: true });
  tl.set(circle, { opacity: 0, x: "-0vw", y: calcHeight(circle), rotate: -95 });
  tl.to(loader, {
    y: "-120vh",
    duration: 1,
    delay: 0.3,
    ease: "expo.inOut",
  });
  tl.to(text, { y: "0rem", ease: "expo.out", duration: 0.5, delay: -0.4 });
  tl.to(overlay, { opacity: 0 }, "<");
  tl.to(text, {
    duration: 1.5,
    ease: "expo.inOut",
    scrambleText: { text: origString, chars: "■" },
  });
  tl.to(circle, { y: 0, ease: "bounce.out", duration: 2, delay: -0.6 });
  tl.to(circle, { opacity: 1, duration: 0.3 }, "<");
  tl.to(circle, {
    x: "50vw",
    rotate: -5,
    duration: 1.3,
    ease: "linear",
    delay: -1.3,
  });
  tl.to(circle, {
    rotate: 0,
    duration: 0.6,
    ease: "elastic.out(1,0.3)",
    onComplete: () => {
      blockInteractions(false);
    },
  });

  tl.add(navbar.show());
  tl.set([overlay, loader], { display: "none", opacity: "", y: "" });

  return tl.then(() => {});
};

/////////////////////////////////////

const homeInit = (page = document) => {
  gsap.registerPlugin(ScrollTrigger);
  let bgImage = page.querySelector("[hero-image]");
  let section = page.querySelector(".section_hero");
  let stickyParent = page.querySelector(".hero_sticky-parent");
  let tl = gsap.timeline();

  tl.set(stickyParent, {
    height: "150svh",
    onComplete: () => {
      lenisMain.resize();
      ScrollTrigger.update();
    },
  });

  tl.to(bgImage, {
    rotate: 180,
    ease: "linear",
    scrollTrigger: {
      trigger: section,
      start: "0",
      end: "bottom top",
      scrub: true,
      id: "bgImage",
    },
  });
};

/////////////////////////////////////

const homeCleanup = (page) => {
  let scrollTriggerInstance;
  scrollTriggerInstance = ScrollTrigger.getById("bgImage");

  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
  }
  scrollTriggerInstance = ScrollTrigger.getById("heading");

  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
  }
};

export { homeInit, homeCleanup, homeEnter };
