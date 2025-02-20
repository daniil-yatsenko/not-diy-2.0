import { gsap } from "gsap";
import { blockInteractions } from "../global/blockInteractions";
import { navbar } from "../global/navigation";

gsap.defaults({
  ease: "power2.inOut",
  duration: 0.3,
});

const overlay = document.querySelector(".overlay");
const loader = document.querySelector(".loader");

function getPosition(el) {
  const rect = el.getBoundingClientRect();
  return {
    x: rect.left,
    y: rect.top,
    height: rect.height,
  };
}

const servicesEnter = async (page) => {
  const tl = gsap.timeline();
  const h2s = page.querySelectorAll("h2");

  blockInteractions(true);
  if (window.getComputedStyle(loader).display === "flex") {
    tl.to(loader, {
      y: "120vh",
      duration: 1,
      delay: 0.2,
      ease: "expo.inOut",
    });
  }

  navbar.hide({ immediate: true });
  tl.set(loader, { display: "none", y: "" });
  tl.set(overlay, {
    display: "block",
  });

  h2s.forEach((h2) => {
    const wrapper = document.createElement("div");
    const h2Copy = document.createElement("div");
    h2Copy.className = "heading-style-h2";
    h2Copy.textContent = h2.textContent;
    h2Copy.setAttribute("data-animation", "h2-copy");
    h2Copy.style.opacity = 0;
    tl.set(wrapper, {
      opacity: 0,
      position: "fixed",
      top: getPosition(h2).y - getPosition(page).y,
    });
    tl.set(h2Copy, { opacity: 0, y: "4rem" });
    wrapper.appendChild(h2Copy);
    overlay.appendChild(wrapper);
  });

  let h2Copies = overlay.querySelectorAll("[data-animation=h2-copy]");

  h2Copies.forEach((element, index) => {
    const wrapper = element.parentElement;
    const revealTl = gsap.timeline();
    const delay = index == 0 ? 0 : 0.05;

    tl.set(wrapper, { overflow: "hidden", opacity: 1 });

    revealTl.to(element, {
      opacity: 1,
      y: "",
      duration: 0.5,
      ease: "expo.inOut",
    });
    revealTl.set(wrapper, { overflow: "", delay: 0.3 }, "<");

    tl.add(revealTl, `+=${delay}`);
  });

  tl.to(overlay, {
    opacity: 0,
    display: "none",
    onComplete: () => {
      blockInteractions(false);
      h2Copies.forEach((element) => {
        element.remove();
      });
    },
  });
  tl.add(navbar.show());
  tl.to(overlay, { opacity: "" });
};

export { servicesEnter };
