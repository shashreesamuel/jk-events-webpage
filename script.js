let navlinks = document.querySelector("li");
let clickableTitle = document.querySelector(".navbar__title");
navlinks.addEventListener("click", () => {
  if (navlinks.classList.contains("active")) {
    navlinks.classList.add("active");
  }
  navlinks.classList.remove("active");
});

clickableTitle.addEventListener("click", () => {
  document.body.classList.toggle("body-dark");
});

let darkMode = localStorage.getItem("body-dark");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("body-dark");
  // 2. Update darkMode in localStorage
  localStorage.setItem("body-dark", "enabled");
  console.log("Enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("body-dark");
  // 2. Update darkMode in localStorage
  localStorage.setItem("body-dark", null);
  console.log("Disabled");
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
}

// When someone clicks the button
clickableTitle.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("body-dark");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});
