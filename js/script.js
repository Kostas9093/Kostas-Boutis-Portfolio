// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

//Mobile menu ========================
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// =================Dark Mode Switch ==========
const checkbox = document.querySelector("#checkbox");
const html = document.querySelector("html");
const dot = document.querySelectorAll(".dot");
const logo = document.querySelectorAll(".logo");

const toggleDarkMode = function () {
  checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
};
// changing dots colors light and dark mode
const dots = function () {
  if (checkbox.checked) {
    dot.forEach((Element) => {
      Element.style.background = "";
    });
  } else {
    dot.forEach((Element) => {
      Element.style.background = "";
    });
  }
};
//calling the function directly

toggleDarkMode();
checkbox.addEventListener("click", toggleDarkMode);
checkbox.addEventListener("click", dots);
// checkbox.addEventListener("click", logoColor);

// Tytpewritter effect
const typeWriter = document.getElementById("typewriter-text");
const text = "Hello, my name is ";

typeWriter.innerHTML = text;
typeWriter.style.setProperty("--characters", text.length);

