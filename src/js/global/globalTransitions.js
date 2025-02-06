import { gsap } from "gsap";

gsap.defaults({
  ease: "power2.inOut",
  duration: 0.3,
});

const overlay = document.querySelector(".overlay");
const loader = overlay.querySelector(".loader");
const navbar = document.querySelector(".navbar");

const defaultLeave = async () => {
  let tl = gsap.timeline();

  tl.set(loader, { opacity: 1, display: "flex" });
  tl.set(overlay, { y: "-120vh", display: "block" });
  tl.to(navbar, { y: "-100%", ease: "expo.inOut", duration: 0.5 });
  tl.to(overlay, { y: "", duration: 1, delay: -0.4, ease: "expo.inOut" });

  tl.to(loader, { opacity: 1 });
  tl.set(navbar, { y: "" });

  return tl.then(() => {});
};

const defaultEnter = async () => {
  let tl = gsap.timeline();

  tl.set(overlay, { y: "", display: "block" });
  tl.set(navbar, { y: "-100%" });
  tl.to(overlay, { y: "100vh", duration: 1, ease: "expo.inOut", delay: 0.3 });
  tl.to(navbar, { y: "", ease: "expo.inOut", duration: 0.5, delay: -0.2 });
  tl.set(loader, { display: "none", opacity: "" });
  tl.set(overlay, { opacity: 1, y: "", display: "none" });

  return tl.then(() => {});
};

export { defaultLeave, defaultEnter };
