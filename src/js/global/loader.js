import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { lenisMain } from "./globalInit";

gsap.defaults({
  ease: "power2.inOut",
  duration: 0.3,
});

// stops the loader CSS animation after the iteration is finished
async function stopCSSAnimation() {
  const paths = document.querySelectorAll(
    "#loaderpath1, #loaderpath2, #loaderpath3"
  );
  const path1 = document.querySelector("#loaderpath1");

  await new Promise((resolve) => {
    const onIteration = () => {
      path1.removeEventListener("animationiteration", onIteration);
      resolve();
    };
    path1.addEventListener("animationiteration", onIteration);
  });

  paths.forEach((path) => {
    path.style.animation = "none";
    path.style.opacity = "1";
  });
}

const loaderAnimation = async () => {
  gsap.registerPlugin(MorphSVGPlugin);

  const body = document.querySelector("body");
  let tl = gsap.timeline();

  lenisMain.scrollTo(0, 0);
  // lenisMain.stop();

  // wait until the loader finishes playing
  await stopCSSAnimation();

  const wrapper = document.querySelector(".loader_wrapper");

  const path1 = wrapper.querySelector("#loaderpath1");
  const path2 = wrapper.querySelector("#loaderpath2");
  const path3 = wrapper.querySelector("#loaderpath3");
  const path4 = wrapper.querySelector("#loaderpath4");
  const d1 =
    "M22.9877 25.921H29.2188C30.2276 25.921 31.2068 25.7577 32.1563 25.4311C33.1058 25.1045 33.9514 24.57 34.6932 23.8277C35.435 23.0557 36.0284 22.0611 36.4735 20.8437C36.9186 19.6263 37.1411 18.1417 37.1411 16.3899C37.1411 14.7866 36.9779 13.3465 36.6515 12.0697C36.3548 10.7633 35.8504 9.64986 35.1383 8.72941C34.4262 7.80896 33.4767 7.11121 32.2898 6.63614C31.1326 6.13137 29.6935 5.87899 27.9726 5.87899H22.9877V25.921ZM16 0H29.7083C31.7557 0 33.6547 0.326611 35.4053 0.979832C37.1856 1.63305 38.7137 2.61289 39.9896 3.91933C41.2952 5.22577 42.304 6.85882 43.0161 8.81849C43.7579 10.7782 44.1288 13.0793 44.1288 15.7218C44.1288 18.0378 43.8321 20.1756 43.2387 22.1353C42.6452 24.095 41.7402 25.7874 40.5237 27.2126C39.3368 28.6378 37.8384 29.7661 36.0284 30.5975C34.2481 31.3992 32.1414 31.8 29.7083 31.8H16V0Z";
  const d2 = "M47.2129 0H54.2006V31.8H47.2129V0Z";
  const d3 =
    "M66.7801 19.4185L55.1191 0H62.9525L70.3853 12.5597L77.7735 0H85.5623L73.7678 19.5966V31.8H66.7801V19.4185Z";
  const d4 = "M87.6844 18.7884L10 18.7884L10 12.4468L87.6844 12.4468V18.7884Z";

  //
  // start morph animation
  //
  tl.set(path4, { fill: "transparent" });
  tl.to(path2, {
    duration: 0.4,
    ease: "power2.in",
    delay: 0.5,
    morphSVG: {
      shape: d2,
    },
  });
  tl.to(path1, {
    duration: 0.6,
    ease: "power2.out",
    morphSVG: {
      shape: d1,
      type: "rotational",
      origin: "10% 10% 50% 50%",
    },
  });
  tl.to(
    path3,
    {
      duration: 0.6,
      ease: "power2.out",
      morphSVG: {
        shape: d3,
        type: "rotational",
        origin: "10% 10% 50% 50%",
      },
    },
    "<"
  );
  tl.set(path4, { fill: "currentColor" });
  tl.to(path4, {
    duration: 0.5,
    delay: -0.1,
    ease: "power2.inOut",
    morphSVG: {
      shape: d4,
    },
  });

  return tl.then(() => {});
};

const bypassLoaderAnimation = async () => {
  const loader = document.querySelector(".loader");
  let tl = gsap.timeline();

  tl.to(loader, { opacity: 0, delay: 0.2 });
  tl.set(loader, { opacity: "", display: "none" });
  return tl.then(() => {});
};

export { loaderAnimation, bypassLoaderAnimation };
