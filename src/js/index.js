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
import { aboutToggleInit, aboutEnter } from "./pages/about.js";

gsap.defaults({
  ease: "power2.inOut",
  duration: 0.3,
});

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
  ],
  transitions: [
    {
      name: "default-transition",
      async once() {
        await defaultEnter();
      },
      async leave() {
        await defaultLeave();
      },
      enter() {},
      after() {
        defaultEnter();
      },
    },
    {
      name: "home-transition",
      to: { namespace: ["home"] },
      async once(data) {
        await homeEnter(data.next.container);
      },
      enter() {},
      after(data) {
        homeEnter(data.next.container);
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
      },
      after(data) {
        servicesEnter(data.next.container);
      },
      async leave() {
        await defaultLeave();
      },
    },
    {
      name: "project-transition",
      to: { namespace: ["project"] },
      sync: false,
      async once(data) {
        projectEnter(data);
      },
      after(data) {
        projectEnter(data);
      },
      afterEnter() {},
      async leave(data) {
        await projectLeave(data.current.container, data.next.url.path);
      },
    },
    {
      name: "about-transition",
      to: { namespace: ["about"] },
      sync: false,
      async once(data) {
        aboutEnter(data.next.container);
        aboutToggleInit(data.next.container);
      },
      async leave() {
        await defaultLeave();
      },
      async after(data) {
        aboutEnter(data.next.container);
        aboutToggleInit(data.next.container);
      },
    },
  ],
});

barba.hooks.beforeOnce(async () => {
  lenisMain.scrollTo(0, { force: true, immediate: true });
  await globalInit();
});

barba.hooks.after(() => {
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
