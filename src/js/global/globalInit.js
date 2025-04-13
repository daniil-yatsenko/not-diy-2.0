import { navbarSelector, mobileMenu } from "./navigation_old";
import { navbar } from "./navigation";
import { lenisInit } from "./lenis.js";
import { componentsInit } from "../components/index";
import { loaderAnimation, bypassLoaderAnimation } from "./loader";
import { playLoader } from "../animationConfig";

var lenisMain = lenisInit();
export { lenisMain };

const globalInit = async () => {
  // navbarSelector();
  // mobileMenu();
  navbar.init();
  componentsInit(document);
  if (playLoader == true) await loaderAnimation();
};

export default globalInit;
