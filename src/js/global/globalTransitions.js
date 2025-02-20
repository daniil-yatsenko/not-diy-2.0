import { gsap } from "gsap";
import { navbar } from "./navigation";
import { blockInteractions } from "../global/blockInteractions";

gsap.defaults({
  ease: "power2.inOut",
  duration: 0.3,
});

const overlay = document.querySelector(".overlay");
const loader = overlay.querySelector(".loader");

const defaultLeave = async () => {
  let tl = gsap.timeline();

  blockInteractions(true);
  tl.set(loader, { opacity: 1, display: "flex" });
  tl.set(overlay, { y: "-120vh", display: "block" });
  tl.add(navbar.hide());
  tl.to(overlay, { y: "", duration: 1, ease: "expo.inOut", delay: -0.4 });
  tl.to(loader, { opacity: 1 });

  return tl.then(() => {
    blockInteractions(false);
  });
};

const defaultEnter = async () => {
  let tl = gsap.timeline();

  blockInteractions(true);
  tl.set(overlay, { y: "", display: "block" });
  tl.to(overlay, {
    y: "100vh",
    duration: 1,
    ease: "expo.inOut",
    delay: 0.3,
    onComplete: () => {
      navbar.show();
    },
  });

  tl.set(loader, { display: "none", opacity: "" });
  tl.set(overlay, { opacity: 1, y: "", display: "none" });

  return tl.then(() => {
    blockInteractions(false);
  });
};

export { defaultLeave, defaultEnter };
