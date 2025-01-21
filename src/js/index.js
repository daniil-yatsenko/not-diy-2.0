// main entry point (e.g., src/js/index.js)

import "../styles/index.css";
import barba from "@barba/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import globalInit from "./global/globalInit.js";
import { lenisMain } from "./global/globalInit.js";
import { homeInit, homeCleanup } from "./pages/home.js";
import { componentsInit, componentsCleanup } from "./components/index.js";

gsap.defaults({
  ease: "power2.inOut",
  duration: 0.3,
});

console.log("Vite connected!");

barba.init({
  views: [
    {
      namespace: "home",
      beforeEnter(data) {
        homeInit(data.next.container);
      },
      afterEnter(data) {},
      afterLeave(data) {
        homeCleanup(data.current.container);
      },
    },
    {
      namespace: "services",
      beforeEnter(data) {},
      afterEnter(data) {},
      afterLeave(data) {},
    },
    {
      namespace: "project",
      beforeEnter(data) {},
      afterEnter(data) {},
      afterLeave(data) {},
    },
    {
      namespace: "work",
      beforeEnter(data) {},
      afterEnter(data) {},
      afterLeave(data) {},
    },
    {
      namespace: "about",
      beforeEnter(data) {},
      afterEnter(data) {},
      afterLeave(data) {},
    },
  ],
  transitions: [
    {
      name: "default-transition",
      leave() {
        console.log("default transition - leave");
      },
      enter(data) {
        console.log("default transition - enter");
        lenisMain.scrollTo(0);
      },
      afterEnter() {
        console.log("default transition - afterEnter");
        lenisMain.resize();
      },
    },
  ],
});

barba.hooks.after(() => {
  ScrollTrigger.refresh();
});

barba.hooks.beforeEnter((data) => {
  componentsInit(data.next.container);
});

barba.hooks.afterLeave((data) => {
  componentsCleanup(data.current.container);
});

document.addEventListener("DOMContentLoaded", () => {
  globalInit();
});
