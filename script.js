const toggleTheme = document.querySelector("#theme-toggle");
console.log(toggleTheme);

const contactForm = document.querySelector("#contact-form");
console.log(contactForm);

const formMessage = document.querySelector("#form-message");
console.log(formMessage);

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
