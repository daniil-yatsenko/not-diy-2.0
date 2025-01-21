import { initNavStarter } from "./components/nav";
import { initButtonStarter } from "./components/button";
// import barba from ".../node_modules/@barba/core";
import barba from "@barba/core";

export function initGeneralAnimation() {
  initNavStarter();
  initButtonStarter();
  console.log("General animations initialized");

  barba.init({
    views: [
      {
        namespace: "home",
        afterEnter(data) {},
      },
    ],
    transitions: [
      {
        name: "default-transition",
        leave() {
          console.log("default transition - leave");
        },
        enter() {
          console.log("default transition - enter");
        },
      },
    ],
  });
}
