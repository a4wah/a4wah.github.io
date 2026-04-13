// 1. DOM Elements
const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#nav-links");
const navOverlay = document.querySelector("#nav-overlay");
const navItems = document.querySelectorAll(".nav-item");

// 2. Navigation Logic (Hamburger Menu)
const toggleMenu = () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    navOverlay.classList.toggle("active");
    
    // Mencegah body scroll saat menu buka
    document.body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "auto";
};

hamburger.addEventListener("click", toggleMenu);
navOverlay.addEventListener("click", toggleMenu);

navItems.forEach(item => {
    item.addEventListener("click", () => {
        if (navLinks.classList.contains("active")) toggleMenu();
    });
});

// 3. Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 4. Reveal Animation on Scroll (Intersection Observer)
const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px" // Trigger sedikit sebelum elemen muncul
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Opsional: stop observing setelah animasi jalan sekali
            // revealObserver.unobserve(entry.target); 
        }
    });
}, revealOptions);

document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el);
});

const animateCareerPath = () => {
    const paths = document.querySelectorAll('.career-path');
    
    paths.forEach(path => {
        const length = path.getTotalLength();
        // Set awal
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                const p = entry.target.querySelectorAll('.career-path');
                p.forEach(path => path.style.strokeDashoffset = '0');
            }
        });
    }, { threshold: 0.2 });

    const wrapper = document.querySelector('.career-wavy-wrapper');
    if (wrapper) observer.observe(wrapper);
};

window.addEventListener('DOMContentLoaded', animateCareerPath);