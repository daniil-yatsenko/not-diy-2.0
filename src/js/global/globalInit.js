import { navbarSelector } from "./navigation";
import { lenisInit } from "./lenis.js";
import { componentsInit } from "../components/index";
import { loaderAnimation, bypassLoaderAnimation } from "./loader";
import { playLoader } from "../animationConfig";

var lenisMain = lenisInit();
export { lenisMain };

const globalInit = async () => {
  navbarSelector();
  componentsInit(document);
  if (playLoader == true) await loaderAnimation();
  console.log("global init");
};

export default globalInit;
