import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

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

const buttonsInit = (page) => {
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
      tl.to(
        char,
        {
          rotate: 360,
          ease: "power3.inOut",
          delay: 0.2,
        },
        0
      );
    });

    button.addEventListener("mouseenter", () => tl.play());
    button.addEventListener("mouseleave", () => tl.reverse());
  });
};

const buttonsCleanup = (page) => {
  const buttons = page.querySelectorAll(".button");

  buttons.forEach((button) => {
    button.removeEventListener("mouseenter", () => tl.play());
    button.removeEventListener("mouseleave", () => tl.reverse());
  });
};

export { buttonsInit, buttonsCleanup };
