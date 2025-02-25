import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { defaultEnter } from "../global/globalTransitions.js";

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
  const aboutText = page.querySelector(".about_prof-copy-wrapper");
  const newText =
    "lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nlorem ipsum dolor sit amet, consectetur adipiscing elit.";

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

  let isReversed = false;
  switchBody.addEventListener("click", () => {
    if (isReversed) {
      toggleTl.reverse();
    } else {
      toggleTl.play();
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
