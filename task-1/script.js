const toggleTheme = document.querySelector("#theme-toggle");
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

toggleTheme.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
  updateToggleIcon();
});

function updateToggleIcon() {
  const isDarkMode = document.documentElement.classList.contains("dark-mode");
  const icon = toggleTheme.querySelector("img");
  icon.src = isDarkMode ? "assets/light-theme.svg" : "assets/dark-theme.svg";
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload
  console.log("Form submitted!");
  contactForm.reset();
  formMessage.textContent =
    "Thanks for reaching out! I'll get back to you soon.";
});
