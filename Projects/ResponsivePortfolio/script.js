console.log("script loaded");

document.addEventListener("DOMContentLoaded", () => {

    // ================= EMAILJS =================
    if (typeof emailjs !== "undefined") {
        emailjs.init("vYXpKkW7voTq_wm02");
    }

    const form = document.getElementById("contact-form");

    if (form && typeof emailjs !== "undefined") {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            emailjs.sendForm("service_h1gm4ci", "template_8ep4289", this)
                .then(() => {
                    alert("Message sent successfully");
                    form.reset();
                })
                .catch((error) => {
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
            menuIcon.classList.toggle("bx-x");
            navbar.classList.toggle("active");
        });

        document.querySelectorAll(".navbar a").forEach(link => {
            link.addEventListener("click", () => {
                navbar.classList.remove("active");
                menuIcon.classList.remove("bx-x");
            });
        });
    }

    // ================= THEME TOGGLE =================
    const toggleBtn = document.getElementById("theme-toggle");

    if (toggleBtn) {

        const themeIcon = toggleBtn.querySelector("i");

        const updateIcon = (isDark) => {
            if (!themeIcon) return;

            themeIcon.classList.toggle("bx-sun", isDark);
            themeIcon.classList.toggle("bx-moon", !isDark);
        };

        // Load saved theme
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark");
            updateIcon(true);
        } else {
            updateIcon(false);
        }

        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            const isDark = document.body.classList.contains("dark");

            localStorage.setItem("theme", isDark ? "dark" : "light");

            updateIcon(isDark);
        });
    }

});
