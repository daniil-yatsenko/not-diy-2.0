import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

// Stores event listeners to remove them later during clean up
const eventListenersMap = new WeakMap();

const buttonsInitArch = (page) => {
  gsap.registerPlugin(SplitText);
  const buttons = page.querySelectorAll(".button");

  buttons.forEach((button) => {
    let tl = gsap.timeline({ paused: true });
    const split = new SplitText(button, { type: "words,chars" });

    const totalChars = split.chars.length;
    const angle = 10; // angle for first and last char;
    const height = 0.25; // in rem;

    split.chars.forEach((char, index) => {
      const charAngle = -angle + (index * 2 * angle) / totalChars;
      const charHeight =
        Math.sin((-Math.PI * index) / (totalChars - 1)) * height;
      gsap.set(char, { transformOrigin: `bottom center` });

      tl.to(
        char,
        {
          duration: 0.2,
          y: `+=${charHeight}rem`,
          rotate: charAngle,
          ease: "power3.inOut",
        },
        0
      );
    });

    button.addEventListener("mouseenter", () => tl.play());
    button.addEventListener("mouseleave", () => tl.reverse());
  });
};

const buttonsInitZigZag = (page) => {
  gsap.registerPlugin(SplitText);
  const buttons = page.querySelectorAll(".button");

  buttons.forEach((button) => {
    let tl = gsap.timeline({ paused: true });
    const split = new SplitText(button, { type: "words,chars" });

    const totalChars = split.chars.length;
    const height = 0.1; // in rem;

    split.chars.forEach((char, index) => {
      let charDirection = index % 2 === 0 ? 1 : -1; // even / odd;
      tl.to(
        char,
        {
          duration: 0.2,
          y: `+=${height * charDirection}rem`,
          ease: "power3.inOut",
        },
        0
      );
    });
    split.chars.forEach((char, index) => {
      let charDirection = index % 2 === 0 ? 1 : -1;
      tl.to(
        char,
        {
          duration: 0.2,
          y: `+=${-2 * height * charDirection}rem`,
          ease: "power3.inOut",
          delay: 0.2,
        },
        0
      );
    });
    split.chars.forEach((char, index) => {
      let charDirection = index % 2 === 0 ? 1 : -1;
      tl.to(
        char,
        {
          duration: 0.2,
          y: `+=${2 * height * charDirection}rem`,
          ease: "power3.inOut",
          delay: 0.4,
        },
        0
      );
    });

    button.addEventListener("mouseenter", () => tl.play());
    button.addEventListener("mouseleave", () => tl.reverse());
  });
};

const animateButton = (button) => {
  gsap.registerPlugin(ScrambleTextPlugin);
  gsap.registerPlugin(SplitText);

  let tl = gsap.timeline({ paused: true });
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
