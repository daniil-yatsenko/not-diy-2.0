import { lenisMain } from "./globalInit";

const blockInteractions = (choice) => {
  const blocker = document.querySelector(".transition-blocker");
  if (choice) {
    lenisMain.stop();
    blocker.style.overflow = "hidden";
    blocker.style.pointerEvents = "none";
  } else {
    blocker.style.overflow = "";
    blocker.style.pointerEvents = "auto";
    lenisMain.start();
  }
};

export { blockInteractions };
