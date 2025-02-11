import { gsap } from "gsap";
import { defaultLeave, defaultEnter } from "../global/globalTransitions";

const overlay = document.querySelector(".overlay");
const loader = overlay.querySelector(".loader");
const navbar = document.querySelector(".navbar");

function getPosition(el) {
  const rect = el.getBoundingClientRect();
  return {
    x: rect.left,
    y: rect.top,
    height: rect.height,
  };
}

const projectLeave = async (data) => {
  const currentPage = data.current.container;
  const path = data.next.url.path;
  const currentImage = [...currentPage.querySelectorAll("a")].find(
    (a) => a.getAttribute("href") === path
  );
  if (!currentImage) return defaultLeave();

  let tl = gsap.timeline();
  const tempImage = document.createElement("div");
  tempImage.appendChild(currentImage.cloneNode(true));
  overlay.appendChild(tempImage);

  tl.set(tempImage, {
    opacity: 0,
    position: "fixed",
    zIndex: "10",
    left: getPosition(currentImage).x - getPosition(currentPage).x,
    top: getPosition(currentImage).y - getPosition(currentPage).y,
  });
  tl.set(loader, { display: "none", opacity: "" });
  tl.set(overlay, { y: "-120vh", display: "block" });
  tl.to(navbar, { y: "-100%", ease: "expo.inOut", duration: 0.5 });
  tl.to(overlay, { y: "", duration: 1, delay: -0.4, ease: "expo.inOut" });
  tl.to(tempImage, { opacity: 1 });

  tl.set(navbar, { y: "" });

  return tl.then(() => {});
};

const projectEnter = async (data) => {};

export { projectEnter, projectLeave };
