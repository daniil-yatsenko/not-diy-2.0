// main entry point (e.g., src/js/index.js)
import "../styles/index.css";
import barba from "@barba/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import globalInit from "./global/globalInit.js";
import { lenisMain } from "./global/globalInit.js";
import { homeInit, homeCleanup, homeEnter } from "./pages/home.js";
import { componentsInit, componentsCleanup } from "./components/index.js";
import { servicesEnter } from "./pages/services";

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
      once() {
        gsap.set(document.querySelector(".overlay"), { display: "none" });
        console.log("default transition - once");
      },
      leave() {
        gsap.set(document.querySelector(".overlay"), { display: "block" });
        console.log("default transition - leave");
      },
      enter(data) {
        gsap.set(document.querySelector(".overlay"), { display: "none" });
        console.log("default transition - enter");
        lenisMain.scrollTo(0);
      },
      afterEnter() {
        lenisMain.resize();
      },
    },
    {
      name: "home-transition",
      to: { namespace: ["home"] },
      async once(data) {
        await homeEnter(data.next.container);
        console.log("home transition - once");
      },
      async enter(data) {
        console.log("home transition - enter");
        lenisMain.scrollTo(0);
        homeEnter(data.next.container);
      },
      afterEnter() {
        console.log("home transition - after enter");
        lenisMain.resize();
      },
      leave() {
        console.log("home transition - leave");
      },
    },
    {
      name: "services-transition",
      to: { namespace: ["services"] },
      sync: false,
      async once(data) {
        lenisMain.scrollTo(0, { duration: 0 });
        servicesEnter(data.next.container);
      },
      async enter(data) {
        lenisMain.scrollTo(0, { duration: 0 });
        servicesEnter(data.next.container);
      },
      afterEnter() {
        lenisMain.resize();
      },
      leave() {
        gsap.set(document.querySelector(".overlay"), { display: "block" });
      },
    },
  ],
});

barba.hooks.beforeOnce(async () => {
  await globalInit();
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
