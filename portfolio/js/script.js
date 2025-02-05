// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is connected!");

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Contact form submission handling
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for your message! I will get back to you soon.");
            contactForm.reset();
        });
    }

    // Add hover effect to skills section
    const skills = document.querySelectorAll(".skills-section .cell");
    skills.forEach(skill => {
        skill.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "0.3s";
        });

        skill.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
