import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

// used for clean up
const allObservers = new Set();

// toggle is-checked class and styling
function checkboxObserver(targetElement) {
  if (!targetElement) return;

  const observer = new MutationObserver(() => {
    const isChecked = targetElement.classList.contains("w--redirected-checked");
    setTimeout(() => {
      targetElement.parentElement.classList.toggle("is-checked", isChecked);
    }, 50);
  });

  observer.observe(targetElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  allObservers.add(observer);
}

// animate email vs phone number field
function meanOfCommunication(trigger) {
  if (!trigger) return;

  const textField = document.getElementById("contact-details-caption");
  const email = document.getElementById("e-mail");
  const phone = document.getElementById("phone-nr");
  const height = email.offsetHeight;
  const tl = gsap.timeline({ paused: true });
  if (textField && email && phone) {
    gsap.set([email, phone, email.parentElement], { height: height });
    gsap.registerPlugin(ScrambleTextPlugin);
    tl.to(textField, {
      duration: 1,
      scrambleText: {
        text: "Your phone number",
        chars: "■",
        ease: "expo.inOut",
      },
    });
    tl.to(
      [email, phone],
      { y: "+=100%", ease: "expo.inOut", duration: 1 },
      "<"
    );
  }

  const observer = new MutationObserver(() => {
    const isChecked = trigger.classList.contains("w--redirected-checked");
    if (isChecked) {
      tl.play();
    }
    if (!isChecked) {
      tl.reverse();
    }
  });

  observer.observe(trigger, {
    attributes: true,
    attributeFilter: ["class"],
  });

  allObservers.add(observer);
}

const formInit = (page) => {
  const forms = page.querySelectorAll(".w-form");

  forms.forEach((form) => {
    // style checkbox if shecked
    const checkboxFields = form.querySelectorAll(".w-checkbox");
    checkboxFields.forEach((field) => {
      const input = field.querySelector(".w-checkbox-input");
      checkboxObserver(input);
    });

    // animate mean of communication
    if (document.getElementById("radio-button-2")) {
      const mocTrigger =
        document.getElementById("radio-button-2").previousElementSibling;
      meanOfCommunication(mocTrigger);
    }
  });
};

const formCleanup = (page) => {
  allObservers.forEach((observer) => observer.disconnect());
  allObservers.clear();
};

export { formInit, formCleanup };
