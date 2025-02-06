import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lenisMain } from "../global/globalInit.js";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { playHomeEnter } from "../animationConfig";

const homeEnter = async (page) => {
  gsap.registerPlugin(ScrambleTextPlugin);
  const navbar = document.querySelector(".navbar");
  const overlay = document.querySelector(".overlay");
  const loader = document.querySelector(".loader");
  const circle = page.querySelector("[hero-image]");
  const text = page.querySelector(".hero_text-wrapper").firstChild;

  if (playHomeEnter == false) {
    gsap.set([overlay, loader], { display: "none" });
    return;
  }

  let tl = gsap.timeline();

  let origString = text.innerHTML;
  tl.set(text, { y: "10rem", scrambleText: { text: "■■■■■■■■■■■■■■■■■■■■" } });

  tl.set(navbar, { y: "-100%" });
  tl.set(circle, { opacity: 0, x: "-0vw", y: "-170vh", rotate: -90 });
  tl.to(loader, {
    y: "-120vh",
    duration: 1,
    delay: 0.3,
    ease: "expo.inOut",
  });
  tl.to(text, { y: "0rem", ease: "expo.out", duration: 0.5, delay: -0.4 });
  tl.to(overlay, { opacity: 0 }, "<");
  tl.set(circle, { opacity: 1 });
  tl.set(body, { overflow: "" });
  tl.to(text, {
    duration: 1.5,
    ease: "expo.inOut",
    scrambleText: { text: origString, chars: "■" },
  });
  tl.to(circle, { y: "0vh", ease: "bounce.out", duration: 2, delay: -0.6 });
  tl.to(circle, {
    x: "50vw",
    rotate: 0,
    duration: 1.3,
    ease: "linear",
    delay: -1.3,
  });
  tl.to(circle, { rotate: 5, duration: 0.6, ease: "elastic.out(1,0.3)" });

  tl.to(navbar, { y: "", ease: "expo.inOut", duration: 0.5, delay: 0.2 });
  tl.set([overlay, loader], { display: "none", opacity: "", y: "" });

  return tl.then(() => {});
};

/////////////////////////////////////

const homeInit = (page = document) => {
  gsap.registerPlugin(ScrollTrigger);
  let bgImage = page.querySelector("[hero-image]").firstChild;
  let heading = page.querySelector(".hero_text-wrapper").firstChild;
  let section = page.querySelector(".section_hero");
  let stickyParent = page.querySelector(".hero_sticky-parent");

  gsap.set(stickyParent, { height: "150svh" });
  lenisMain.resize();
  ScrollTrigger.update();

  let tl = gsap.timeline();

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
  console.log("home cleanup");

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
