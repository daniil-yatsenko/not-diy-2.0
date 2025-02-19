import { gsap } from "gsap";
import { animateButton } from "../components/buttons";

const navbar = {
  navbarEl: document.querySelector(".navbar_menu-wrapper"),
  navLinks: document.querySelectorAll(".navbar_nav-link"),
  selector: document.querySelector(".navbar_page-selector"),
  menuBtn: document.querySelector(".navbar_menu-button"),
  linksWrapper: document.querySelector(".navbar_menu-wrapper"),
  overlay: document.querySelector(".navbar_overlay"),
  figure: document.querySelector(".navbar_overlay_figure-wrapper"),
  isMenuOpen: false,

  openMenu() {
    const tl = gsap.timeline();
    tl.set([this.menuBtn, this.overlay], { pointerEvents: "none" });
    tl.set(this.overlay, {
      display: "block",
      backdropFilter: "blur(0px)",
      backgroundColor: "transparent",
    });
    tl.set(this.navLinks, { x: "10rem" });
    tl.set(this.linksWrapper, { display: "flex" });
    tl.add(animateButton(this.menuBtn).play()); // add
    tl.to(
      this.overlay,
      {
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(225, 219, 209, 0.50)",
        ease: "expo.inOut",
        duration: 0.2,
      },
      "<"
    );
    tl.to(
      this.figure,
      {
        x: "-12rem",
        rotate: -40,
        duration: 0.5,
        ease: "expo.inOut",
      },
      "<"
    );
    tl.to(this.navLinks, {
      x: "0rem",
      duration: 0.5,
      ease: "expo.inOut",
      stagger: 0.1,
      delay: -0.4,
    });
    tl.set([this.menuBtn, this.overlay], { pointerEvents: "" });
    this.isMenuOpen = true;
  },
  closeMenu() {
    const tl = gsap.timeline();
    tl.add(animateButton(this.menuBtn).reverse()); ////////////////
    tl.to(
      this.navLinks,
      {
        x: "12rem",
        duration: 0.5,
        ease: "expo.inOut",
        stagger: { each: 0.1, from: "end" },
      },
      "<"
    );
    tl.to(this.figure, {
      x: "0rem",
      rotate: 0,
      duration: 0.5,
      ease: "expo.inOut",
      delay: -0.4,
    });
    tl.to(this.overlay, {
      backdropFilter: "blur(0px)",
      backgroundColor: "transparent",
      ease: "expo.inOut",
      duration: 0.2,
      delay: -0.3,
    });
    tl.set([this.menuBtn, this.overlay], { pointerEvents: "none" });
    tl.set(this.linksWrapper, { display: "none" });
    tl.set(this.overlay, { display: "none" });
    tl.set(this.figure, { x: "0rem", rotate: 0 });
    tl.set([this.menuBtn, this.overlay], { pointerEvents: "" });
    this.isMenuOpen = false;
  },
  handleMenuClick() {
    this.menuBtn.addEventListener("click", () => {
      if (this.isMenuOpen) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    });
  },
  init() {
    gsap.set(this.linksWrapper, { display: "none" });
    gsap.set(this.overlay, { display: "none" });
    this.handleMenuClick();
  },
};

export { navbar };
