const toggleTheme = document.querySelector("#theme-toggle");

const contactForm = document.querySelector("#contact-form");

const formMessage = document.querySelector("#form-message");

toggleTheme.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.classList.toggle("dark-mode");
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload
  console.log("Form submitted!");
  contactForm.reset();
  formMessage.textContent =
    "Thanks for reaching out! I'll get back to you soon.";
});
