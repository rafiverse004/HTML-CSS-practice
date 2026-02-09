console.log("script loaded");

document.addEventListener("DOMContentLoaded", () => {

  // ================= EMAILJS =================
  (function () {
    emailjs.init("vYXpKkW7voTq_wm02"); 
  })();

  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs.sendForm("service_h1gm4ci", "template_8ep4289", this)
        .then(() => {
          alert("Message sent successfully");
          form.reset();
        }, (error) => {
          alert("FAILED: " + error.text);
          console.error(error);
        });
    });
  }

  // ================= MOBILE MENU =================
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
      navbar.classList.toggle("active");
      menuIcon.classList.toggle("bx-x");
    });

    document.querySelectorAll(".navbar a").forEach(link => {
      link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
      });
    });
  }

  // ================= CONTACT BUTTON =================
  const contactBtn = document.getElementById("contact-btn");
  const contactSection = document.getElementById("contact");

  if (contactBtn && contactSection) {
    contactBtn.addEventListener("click", () => {
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  }

});
