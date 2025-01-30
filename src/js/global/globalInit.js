import { navbarSelector } from "./navigation.js";
import { lenisInit } from "./lenis.js";
import { componentsInit } from "../components/index.js";
import { loaderAnimation } from "./loader";

var lenisMain = lenisInit();
// var lenisMain;
export { lenisMain };

const globalInit = async () => {
  navbarSelector();
  componentsInit(document);
  await loaderAnimation();
  console.log("global init");
};

export default globalInit;
