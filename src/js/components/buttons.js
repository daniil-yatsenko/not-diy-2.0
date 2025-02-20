import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

// Stores event listeners to remove them later during clean up
const eventListenersMap = new WeakMap();

const animateButton = (button) => {
  gsap.registerPlugin(ScrambleTextPlugin);
  gsap.registerPlugin(SplitText);

  let tl = gsap.timeline({ paused: true });

  if (!button.hasAttribute("style"))
    gsap.set(button, { width: button.offsetWidth * 1.02 });

  const split = new SplitText(button, { type: "words,chars" });
  split.chars.forEach((char) => {
    tl.set(char, { width: char.offsetWidth });
  });

  split.chars.forEach((char, index) => {
    let a = index == 0 ? 0 : -1; // makes delay 0 for 1st character and -0.25 for each subsequent

    tl.to(char, {
      duration: 0.3,
      delay: 0.25 * a,
      scrambleText: {
        text: "{original}",
        chars: "■",
        ease: "expo.inOut",
      },
    });
  });

  return tl;
};

const buttonsInit = (page) => {
  gsap.registerPlugin(ScrambleTextPlugin);
  gsap.registerPlugin(SplitText);
  const buttons = page.querySelectorAll(".button");

  buttons.forEach((button) => {
    let tl = animateButton(button);
    // let tl = gsap.timeline({ paused: true });
    // gsap.set(button, { width: button.offsetWidth * 1.02 });

    // const split = new SplitText(button, { type: "words,chars" });
    // split.chars.forEach((char) => {
    //   tl.set(char, { width: char.offsetWidth });
    // });

    // split.chars.forEach((char, index) => {
    //   let a = index == 0 ? 0 : -1; // makes delay 0 for 1st character and -0.25 for each subsequent

    //   tl.to(char, {
    //     duration: 0.3,
    //     delay: 0.25 * a,
    //     scrambleText: {
    //       text: "{original}",
    //       chars: "■",
    //       ease: "expo.inOut",
    //     },
    //   });
    // });
    // Create event listeners for hover
    const hoverInListener = () => tl.play();
    const hoverOutListener = () => tl.reverse();

    // Add to WeakMap for cleanup
    eventListenersMap.set(button, { hoverInListener, hoverOutListener });

    button.addEventListener("mouseenter", hoverInListener);
    button.addEventListener("mouseleave", hoverOutListener);
  });
};

const buttonsCleanup = (page) => {
  const buttons = page.querySelectorAll(".button");

  buttons.forEach((button) => {
    const listeners = eventListenersMap.get(button);
    if (listeners) {
      button.removeEventListener("mouseenter", listeners.hoverInListener);
      button.removeEventListener("mouseleave", listeners.hoverOutListener);
      eventListenersMap.delete(button); // Clean up the WeakMap entry
    }
  });
};

export { buttonsInit, buttonsCleanup, animateButton };
