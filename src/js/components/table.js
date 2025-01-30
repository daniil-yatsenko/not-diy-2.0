import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.defaults({
  ease: "power2.inOut",
  duration: 0.3,
});

// Stores event listeners to remove them later during clean up
const eventListenersMap = new WeakMap();

function hoverTimeline(description, animationDiv) {
  let tl = gsap.timeline({ paused: true });

  tl.set(description.firstChild, {
    opacity: 0,
  });
  tl.set(description, { opacity: 1, display: "" });
  tl.to(animationDiv, { width: "100%" });
  tl.to(description.firstChild, { opacity: 1 });
  return tl;
}

export const tableRowsInit = (page) => {
  const tables = page.querySelectorAll(".table");

  tables.forEach((table) => {
    const rows = table.querySelectorAll(".table_row");

    rows.forEach((row) => {
      //
      // Animate rows on page scroll
      //
      gsap.set(row, {
        borderBottom: "1px solid transparent",
        position: "relative",
        opacity: 0,
      });

      const rowAnimationDiv = document.createElement("div");
      gsap.set(rowAnimationDiv, {
        height: "1px",
        width: "0%",
        position: "absolute",
        bottom: "0",
        left: "0",
        backgroundColor: "black",
      });
      row.appendChild(rowAnimationDiv);

      ScrollTrigger.create({
        trigger: rowAnimationDiv,
        start: "bottom 90%",
        onEnter: () => {
          gsap.to(rowAnimationDiv, {
            width: "100%",
            duration: 0.5,
            ease: "power2.inOut",
          });
          gsap.to(row, { opacity: 1 });
        },
        onLeaveBack: () => {
          gsap.to(rowAnimationDiv, {
            width: "0%",
            duration: 0.4,
            ease: "power2.inOut",
          });
          gsap.to(row, { opacity: 0 });
        },
      });

      //
      // Animate description on hover, if any
      //
      let description = row.querySelector(".table_row-description");
      if (description) {
        gsap.set(row, { cursor: "pointer" });
        gsap.set(description, {
          display: "none",
          borderBottom: "1px solid transparent",
          opacity: 0,
        });

        const descriptionAnimationDiv = document.createElement("div");
        gsap.set(descriptionAnimationDiv, {
          height: "1px",
          width: "0%",
          position: "absolute",
          bottom: "-1",
          left: "-0",
          backgroundColor: "black",
        });
        description.appendChild(descriptionAnimationDiv);

        const hoverTl = hoverTimeline(description, descriptionAnimationDiv);

        // Create event listeners for hover
        const hoverInListener = () =>
          // rowHoverIn(description, descriptionAnimationDiv);
          hoverTl.play();
        const hoverOutListener = () =>
          // rowHoverOut(description, descriptionAnimationDiv);
          hoverTl.reverse();

        // Add to WeakMap for cleanup
        eventListenersMap.set(row, { hoverInListener, hoverOutListener });

        row.addEventListener("mouseenter", hoverInListener);
        row.addEventListener("mouseleave", hoverOutListener);
      }
    });
  });
  return;
};

export const tableRowsCleanup = (page) => {
  // clean up scrolltrigger animation
  ScrollTrigger.killAll();

  // clean up hover event listeners
  const tables = page.querySelectorAll(".table");
  tables.forEach((table) => {
    const rows = table.querySelectorAll(".table_row");
    rows.forEach((row) => {
      const listeners = eventListenersMap.get(row);
      if (listeners) {
        console.log(listeners);
        row.removeEventListener("mouseover", row.hoverInListener);
        row.removeEventListener("mouseout", row.hoverOutListener);
        eventListenersMap.delete(row);
      }
    });
  });
  return;
};
