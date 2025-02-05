import { gsap } from "gsap";

gsap.defaults({
  ease: "power2.inOut",
  duration: 0.3,
});

function getPosition(el) {
  const rect = el.getBoundingClientRect();
  return {
    x: rect.left,
    y: rect.top,
    height: rect.height,
  };
}

const servicesEnter = async (page) => {
  window.scrollTo(0, 0);
  const overlay = document.querySelector(".overlay");
  const loader = document.querySelector(".loader");
  const tl = gsap.timeline();
  const h2s = page.querySelectorAll("h2");

  tl.set(loader, { display: "none" });
  tl.set(overlay, {
    display: "block",
  });

  h2s.forEach((h2) => {
    const wrapper = document.createElement("div");
    const h2Copy = document.createElement("div");
    h2Copy.className = "heading-style-h2";
    h2Copy.textContent = h2.textContent;
    h2Copy.setAttribute("data-animation", "h2-copy");
    tl.set(wrapper, {
      position: "fixed",
      top: getPosition(h2).y - getPosition(page).y,
    });

    wrapper.appendChild(h2Copy);
    overlay.appendChild(wrapper);

    tl.set(h2Copy, { opacity: 0, y: "4rem" });
  });

  let h2Copies = overlay.querySelectorAll("[data-animation=h2-copy]");

  h2Copies.forEach((element, index) => {
    const wrapper = element.parentElement;
    const revealTl = gsap.timeline();
    const delay = index == 0 ? 0 : 0.05;

    tl.set(wrapper, { overflow: "hidden" });

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
      h2Copies.forEach((element) => {
        element.remove();
      });
    },
  });
  tl.to(overlay, { opacity: "" });
};

export { servicesEnter };
