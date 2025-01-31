import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.defaults({
  ease: "power2.inOut",
  duration: 0.3,
});

function scrambleHeading(heading) {
  gsap.registerPlugin(ScrambleTextPlugin);
  const originalText = heading.textContent;
  let tl = gsap.timeline();

  heading.textContent = "■".repeat(originalText.length);

  tl.to(heading, {
    duration: 1,
    scrambleText: {
      text: originalText,
      chars: "■",
      ease: "expo.inOut",
    },
  });

  return tl;
}

const headingsInit = (page) => {
  //
  //H1: marquee for overflow
  //add animation: [animate-h1=true]
  //remove animation: [animate-h1=false]
  //
  let h1s = [
    ...page.querySelectorAll("h1"),
    ...page.querySelectorAll(".heading-style-h1"),
    ...page.querySelectorAll("[animate-h1=true]"),
  ];
  // Convert to Set to remove duplicates, then back to array
  h1s = Array.from(new Set(h1s));
  h1s = h1s.filter(
    (h) => !h.matches(".heading-style-h2") && !h.matches("[animate-h1=false]")
  );

  h1s.forEach((heading) => {
    const h1width = heading.offsetWidth;
    const wWidth = window.innerWidth;
    const duration = (h1width / wWidth) * 10;

    if (h1width > wWidth) {
      const duplicate = document.createElement("div");
      const textContent = heading.textContent;
      duplicate.append(textContent);
      duplicate.classList.add("heading-style-h1");
      gsap.set(heading.parentElement, { display: "flex" });
      gsap.set([heading, duplicate], {
        marginLeft: "0.25ch",
        marginRight: "0.25ch",
      });
      heading.parentElement.append(duplicate);

      const animation = gsap
        .to(heading.parentElement, {
          xPercent: -50,
          repeat: -1,
          duration: duration,
          ease: "linear",
        })
        .totalProgress(0.5);
    }
  });

  //
  //H2: scramble text
  //add animation: [animate-h2=true]
  //remove animation: [animate-h2=false]
  //
  let h2s = [
    ...page.querySelectorAll("h2"),
    ...page.querySelectorAll(".heading-style-h2"),
    ...page.querySelectorAll("[animate-h2=true]"),
  ];
  // Convert to Set to remove duplicates, then back to array
  h2s = Array.from(new Set(h2s));
  h2s = h2s.filter(
    (h) => !h.matches(".heading-style-h3") && !h.matches("[animate-h2=false]")
  );

  h2s.forEach((heading) => {
    let tl = gsap.timeline({ paused: true });
    tl.from(heading, { opacity: 0, duration: 0.1 });
    tl.add(scrambleHeading(heading));
    ScrollTrigger.create({
      trigger: heading,
      start: "bottom 95%",
      end: "top 10%",
      onEnter: () => {
        tl.play();
      },
      onLeave: () => {
        tl.reverse();
      },
      onEnterBack: () => {
        tl.play();
      },
      onLeaveBack: () => {
        tl.reverse();
      },
    });
  });
};

const headingsCleanup = (page) => {
  ScrollTrigger.killAll();
};

export { headingsInit, headingsCleanup };
