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
import { defaultLeave, defaultEnter } from "./global/globalTransitions.js";
import { projectEnter, projectLeave } from "./pages/projectPage.js";

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
      async once() {
        await defaultEnter();
        console.log("default transition - once");
      },
      async leave() {
        await defaultLeave();
        console.log("default transition - leave");
      },
      enter() {},
      after() {
        defaultEnter();
        console.log("default transition - after");
      },
    },
    {
      name: "home-transition",
      to: { namespace: ["home"] },
      async once(data) {
        await homeEnter(data.next.container);
        console.log("home transition - once");
      },
      enter() {},
      after(data) {
        homeEnter(data.next.container);
        console.log("home transition - after");
      },
      async leave() {
        await defaultLeave();
      },
    },
    {
      name: "services-transition",
      to: { namespace: ["services"] },
      sync: false,
      async once(data) {
        servicesEnter(data.next.container);
        console.log("services transition - once");
      },
      after(data) {
        console.log("services transition - after");
        servicesEnter(data.next.container);
      },
      async leave() {
        await defaultLeave();
        console.log("services default transition - leave");
      },
    },
    {
      name: "project-transition",
      to: { namespace: ["project"] },
      sync: false,
      async once(data) {
        projectEnter(data);
        console.log("project transition - once");
      },
      after(data) {
        projectEnter(data);
        console.log("project transition - after");
      },
      afterEnter() {},
      async leave(data) {
        await projectLeave(data.current.container, data.next.url.path);
        console.log("project transition - leave");
      },
    },
  ],
});

barba.hooks.beforeOnce(async () => {
  lenisMain.scrollTo(0, { force: true, immediate: true });
  await globalInit();
});

barba.hooks.after(() => {
  console.log("lenis resized");
  lenisMain.resize();
  ScrollTrigger.refresh();
});

barba.hooks.beforeEnter((data) => {
  lenisMain.scrollTo(0, { force: true, immediate: true });
  componentsInit(data.next.container);
});

barba.hooks.afterLeave((data) => {
  componentsCleanup(data.current.container);
});
