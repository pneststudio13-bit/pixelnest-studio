
// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    menuToggle.textContent =
        nav.classList.contains("active") ? "✕" : "☰";
});

// Close menu after selecting a link
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// Automatic copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();


// PixelNest Scroll Reveal Animation

const revealElements = document.querySelectorAll(
    '.hero-content, .hero-visual, .intro, .section-heading, .service-card, .portfolio-card, .cta, .contact-form, .footer'
);

revealElements.forEach(element => {
    element.classList.add('reveal');
});

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});
