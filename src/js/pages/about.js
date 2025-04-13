import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { defaultEnter } from "../global/globalTransitions.js";

const changeText = () => {
  const profText = document.querySelector(".about_prof-copy-wrapper");
  const persText = document.querySelector(".about_pers-copy-wrapper");
  const tl = gsap.timeline({ paused: true });
  const wrapper = profText.parentElement;
  const currentHeight = wrapper.offsetHeight;

  tl.set(wrapper, { minHeight: `${currentHeight / 16}rem` });
  tl.to(profText, { height: "0rem", duration: 0.5, ease: "expo.inOut" });
  tl.set(persText, { height: "0rem" });
  tl.set(profText, { display: "none" });
  tl.set(persText, { display: "block" });
  tl.to(persText, { height: "auto", duration: 0.5, ease: "expo.inOut" });

  return tl;
};

const aboutToggleInit = (page) => {
  gsap.registerPlugin(ScrambleTextPlugin);
  const switchBody = page.querySelector(".about_switch-body");
  const switchToggle = page.querySelector(".about_switch-toggle");
  const switchColor = getComputedStyle(switchToggle).backgroundColor;
  const ToggleTravelDistance =
    switchBody.offsetWidth - switchToggle.offsetWidth - 4;
  const profCaption = page.querySelector(".about_professional-caption");
  const persCaption = page.querySelector(".about_personal-caption");
  const toggleTl = gsap.timeline({ paused: true });

  toggleTl.to(switchToggle, {
    x: ToggleTravelDistance,
    ease: "expo.inOut",
    duration: 0.4,
    backgroundColor: "#e8e3da",
  });
  //   toggleTl.to(
  //     aboutText,
  //     {
  //       duration: 1,
  //       scrambleText: {
  //         text: newText,
  //         chars: "■",
  //         ease: "expo.inOut",
  //       },
  //     },
  //     "<"
  //   );
  toggleTl.to(
    switchBody,
    {
      backgroundColor: switchColor,
      duration: 0.4,
      ease: "expo.inOut",
    },
    "<"
  );
  toggleTl.to(
    profCaption,
    {
      color: "#828282",
      duration: 0.4,
      ease: "expo.inOut",
    },
    "<"
  );
  toggleTl.to(
    persCaption,
    {
      color: "black",
      duration: 0.4,
      ease: "expo.inOut",
    },
    "<"
  );
  toggleTl.to(
    switchToggle,
    {
      scaleY: 0.9,
      ease: "linear",
      duration: 0.2,
    },
    "<"
  );
  toggleTl.to(switchToggle, {
    scaleY: 1,
    ease: "linear",
    duration: 0.2,
    delay: -0.2,
  });

  const textTl = changeText();

  let isReversed = false;
  switchBody.addEventListener("click", () => {
    if (isReversed) {
      toggleTl.reverse();
      textTl.reverse();
    } else {
      toggleTl.play();
      textTl.play();
    }
    isReversed = !isReversed;
  });
};

const aboutEnter = async (page) => {
  const image1 = page.querySelector(".about_image-1-wrapper");
  const image2 = page.querySelector(".about_image-2-wrapper");
  const entryTl = gsap.timeline();

  entryTl.set([image1, image2], {
    opacity: 0,
    scale: 1.02,
    filter: "brightness(8)",
  });

  await defaultEnter();

  entryTl.to([image1, image2], {
    opacity: 1,
    scale: 1,
    duration: 0.3,
    ease: "expo.inOut",
    stagger: 0.2,
  });
  entryTl.to([image1, image2], {
    filter: "brightness(1)",
    duration: 3.5,
    ease: "power3.out",
  });
};

export { aboutEnter, aboutToggleInit };
