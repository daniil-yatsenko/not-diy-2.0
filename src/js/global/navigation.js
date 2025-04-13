import { gsap } from "gsap";
import { animateButton } from "../components/buttons";

const navbar = {
  navbarEl: document.querySelector(".navbar"),
  navLinks: document.querySelectorAll(".navbar_nav-link"),
  selector: document.querySelector(".navbar_page-selector"),
  menuBtn: document.querySelector(".navbar_menu-button"),
  linksWrapper: document.querySelector(".navbar_menu-wrapper"),
  overlay: document.querySelector(".navbar_overlay"),
  figure: document.querySelector(".navbar_overlay_figure-wrapper"),
  isMenuOpen: false,
  isNavbarHidden: false,
  isSetToMobile: false,
  eventListenersMap: new WeakMap(),

  openMenu() {
    const tl = gsap.timeline();
    if (this.isMenuOpen) return tl;
    tl.set([this.menuBtn, this.overlay], { pointerEvents: "none" });
    tl.set(this.overlay, {
      display: "block",
      backdropFilter: "blur(0px)",
      backgroundColor: "transparent",
    });
    tl.set(this.navLinks, { x: "10rem" });
    tl.set(this.linksWrapper, { display: "flex" });
    tl.add(animateButton(this.menuBtn).play());
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
    return tl;
  },
  closeMenu(immediate = false) {
    const tl = gsap.timeline();
    if (!this.isMenuOpen) return tl;
    if (immediate) {
      tl.set(this.navLinks, { x: "" });
      tl.set(this.figure, { x: "0rem", rotate: 0 });
      tl.set(this.overlay, {
        backdropFilter: "blur(0px)",
        backgroundColor: "transparent",
        display: "none",
      });
      tl.set(this.linksWrapper, { display: "none" });
      return tl;
    }
    tl.set([this.menuBtn, this.overlay], { pointerEvents: "none" });
    tl.add(animateButton(this.menuBtn).reverse());
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
    tl.set(this.linksWrapper, { display: "none" });
    tl.set(this.navLinks, { x: "" });
    tl.set(this.overlay, { display: "none" });
    tl.set(this.figure, { x: "0rem", rotate: 0 });
    tl.set([this.menuBtn, this.overlay], { pointerEvents: "" });
    this.isMenuOpen = false;
    return tl;
  },
  handleMenuClick() {
    this.menuBtn.addEventListener("click", () => {
      if (this.isMenuOpen) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    });
    this.overlay.addEventListener("click", () => {
      this.closeMenu();
    });
  },
  hide(immediate = false) {
    const tl = gsap.timeline();
    if (this.isNavbarHidden) return tl;
    if (immediate) {
      tl.add(this.closeMenu(immediate));
      tl.set(this.navbarEl, { y: "-100%" });
      this.isNavbarHidden = true;
      return tl;
    }
    tl.add(this.closeMenu());
    tl.to(this.navbarEl, {
      y: "-100%",
      ease: "expo.inOut",
      duration: 0.5,
      delay: -0.1,
    });

    this.isNavbarHidden = true;
    return tl;
  },
  show() {
    const tl = gsap.timeline();
    if (!this.isNavbarHidden) return;
    tl.to(this.navbarEl, { y: "", ease: "expo.inOut", duration: 0.5 });
    this.isNavbarHidden = false;
    return tl;
  },
  selectorInit() {
    let tl = gsap.timeline();

    let scale = 0; // in px
    let isHovered = false;
    let isScaled = false;
    let isClicked = false;

    // move the selector div to the navLink of choice
    const animateSelector = (navLink, delay = 0) => {
      tl.clear();
      const nextLinkRect = navLink.getBoundingClientRect();
      const parentRect = navLink.parentElement.getBoundingClientRect();

      const nextLinkDimensions = {
        width: nextLinkRect.width,
        height: nextLinkRect.height + 1,
        top: nextLinkRect.top - parentRect.top,
        left: nextLinkRect.left - parentRect.left,
      };

      if (isHovered && !isScaled) {
        tl.to(this.selector, {
          width: `-=${scale}px`,
          height: nextLinkDimensions.height - scale,
          x: `+=${scale / 2}px`,
          y: nextLinkDimensions.top + scale / 2,
          ease: "back.inOut(1.7)",
        });
      }
      tl.to(this.selector, {
        width: nextLinkDimensions.width - scale,
        height: nextLinkDimensions.height - scale,
        x: nextLinkDimensions.left + scale / 2,
        y: nextLinkDimensions.top + scale / 2,
        ease: "back.inOut(1.7)",
        duration: 0.5,
        delay: delay - 0.1,
      });
      if (!isHovered && isScaled) {
        tl.to(this.selector, {
          width: `+=${scale}px`,
          height: nextLinkDimensions.height,
          x: `-=${scale / 2}px`,
          y: nextLinkDimensions.top,
        });
      }
    };

    // returns the navLink of the current page / directory
    const currentNavLink = () => {
      let currentLink = Array.from(this.navLinks).filter(
        (link) => link.getAttribute("href") === "/"
      )[0]; // return "home" navLink by default

      let pathname = window.location.pathname;

      this.navLinks.forEach((link) => {
        let href = link.getAttribute("href");
        if (href != "/" && pathname.includes(href)) {
          currentLink = link;
        }
      });

      return currentLink;
    };

    gsap.set(this.selector, { display: "block", width: "0rem", opacity: 1 });
    animateSelector(currentNavLink());

    this.navLinks.forEach((navLink) => {
      const handleMouseEnter = () => {
        scale = 4;
        isHovered = true;
        animateSelector(navLink);
        isScaled = true;
      };

      const handleMouseClick = () => {
        animateSelector(navLink);
        isClicked = true;
      };

      navLink.addEventListener("mouseenter", handleMouseEnter);
      navLink.addEventListener("click", handleMouseClick);
      this.eventListenersMap.set(navLink, handleMouseEnter);
      this.eventListenersMap.set(navLink, handleMouseClick);
    });

    const handleMouseLeave = () => {
      isHovered = false;
      animateSelector(currentNavLink());
      scale = 0;
      isScaled = false;
    };

    this.navbarEl.addEventListener("mouseleave", handleMouseLeave);
    this.eventListenersMap.set(this.navbarEl, handleMouseLeave);
  },
  selectorKill() {
    this.navLinks.forEach((navLink) => {
      const handleMouseEnter = this.eventListenersMap.get(navLink);
      const handleMouseClick = this.eventListenersMap.get(navLink);

      if (handleMouseEnter) {
        navLink.removeEventListener("mouseenter", handleMouseEnter);
      }

      if (handleMouseClick) {
        navLink.removeEventListener("click", handleMouseClick);
      }

      this.eventListenersMap.delete(navLink);
    });

    const handleMouseLeave = this.eventListenersMap.get(this.navbarEl);

    if (handleMouseLeave) {
      this.navbarEl.removeEventListener("mouseleave", handleMouseLeave);
      this.eventListenersMap.delete(this.navbarEl);
    }

    gsap.set(this.selector, { opacity: 0 });
  },
  resizeListener() {
    const resizeHandler = () => {
      const tl = gsap.timeline();

      if (window.innerWidth > 767 && this.isSetToMobile) {
        tl.add(this.closeMenu(true));
        tl.set(this.menuBtn, { display: "none" });
        tl.set(this.linksWrapper, { display: "" });
        this.selectorInit();
        this.isMenuOpen = false;
        this.isSetToMobile = false;
      }

      if (window.innerWidth < 768 && !this.isSetToMobile) {
        tl.set(this.menuBtn, { display: "block" });
        tl.set(this.linksWrapper, { display: "none" });
        this.selectorKill();
        this.isSetToMobile = true;
      }
      return tl;
    };

    window.addEventListener("resize", resizeHandler);
  },
  init() {
    if (window.innerWidth < 768) {
      this.isSetToMobile = true;
      gsap.set(this.linksWrapper, { display: "none" });
    } else this.selectorInit();
    this.resizeListener();
    this.handleMenuClick();
  },
};

export { navbar };
