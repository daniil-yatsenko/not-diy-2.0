// not done

function abcChatGPT(targetElement, className) {
  // Check if the element exists
  if (targetElement) {
    // Create a MutationObserver instance
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          // Check if the class is applied
          if (targetElement.classList.contains(className)) {
            console.log(".w--redirected-checked class added!");
          } else {
            console.log(".w--redirected-checked class removed!");
          }
        }
      }
    });

    // Configuration of the observer
    const config = {
      attributes: true, // Watch for attribute changes
      attributeFilter: ["class"], // Only watch changes to the 'class' attribute
    };

    // Start observing the target element
    observer.observe(targetElement, config);
  } else {
    console.log("Target element not found.");
  }
}

const formInit = (page) => {
  console.log("form init");
  const forms = page.querySelector(".w-form");

  forms.forEach((form) => {
    const checkboxFields = form.querySelector(".w-checkbox");
    checkboxFields.forEach((field) => {
      const input = field.querySelector(".w-checkbox-input");
    });
  });
};

export { formInit };
