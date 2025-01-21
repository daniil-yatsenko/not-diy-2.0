import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const tableRowsInit = (page) => {
  const tables = page.querySelectorAll(".table");

  tables.forEach((table) => {
    const rows = table.querySelectorAll(".table_row");

    rows.forEach((row) => {
      gsap.set(row, {
        borderBottom: "1px solid transparent",
        position: "relative",
        opacity: 0,
      });

      const animationDiv = document.createElement("div");
      gsap.set(animationDiv, {
        height: "1px",
        width: "0%",
        position: "absolute",
        bottom: "0",
        left: "0",
        backgroundColor: "black",
      });
      row.appendChild(animationDiv);

      ScrollTrigger.create({
        trigger: animationDiv,
        start: "bottom 90%",
        onEnter: () => {
          gsap.to(animationDiv, {
            width: "100%",
            duration: 0.5,
            ease: "power2.inOut",
          });
          gsap.to(row, { opacity: 1 });
        },
        onLeaveBack: () => {
          gsap.to(animationDiv, {
            width: "0%",
            duration: 0.4,
            ease: "power2.inOut",
          });
          gsap.to(row, { opacity: 0 });
        },
      });
    });
  });
  return;
};

export const tableRowsCleanup = () => {
  ScrollTrigger.killAll();
  return;
};
