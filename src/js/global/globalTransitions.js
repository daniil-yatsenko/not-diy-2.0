import { gsap } from "gsap";

gsap.defaults({
  ease: "power2.inOut",
  duration: 0.3,
});

const overlay = document.querySelector(".overlay");
const loader = overlay.querySelector(".loader");

const defaultLeave = async () => {
  let tl = gsap.timeline();

  tl.set(loader, { display: "none" });
  tl.set(overlay, { opacity: 0, display: "block" });
  tl.to(overlay, { opacity: 1 });
  tl.set(loader, { opacity: 0 });
  tl.set(loader, { display: "flex" });
  tl.to(loader, { opacity: 1 });

  return tl.then(() => {});
};

const defaultEnter = async () => {
  const overlay = document.querySelector(".overlay");
  let tl = gsap.timeline();

  tl.to(loader, { opacity: 0 });
  tl.to(overlay, { opacity: 0 });
  tl.set(loader, { display: "none", opacity: "" });
  tl.set(overlay, { opacity: 1, display: "none" });

  return tl.then(() => {});
};

export { defaultLeave, defaultEnter };
