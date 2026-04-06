// script.js

// Scroll reveal animations using Intersection Observer API
const revealElements = document.querySelectorAll('.reveal');
const options = { threshold: 0.1 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);
revealElements.forEach(element => observer.observe(element));

// Zoom-in effects for gallery images
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(image => {
    image.addEventListener('mouseover', () => image.classList.add('zoom-in'));
    image.addEventListener('mouseout', () => image.classList.remove('zoom-in'));
});

// Form validation
document.querySelector('form').addEventListener('submit', function (event) {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    if (!email || !password) {
        event.preventDefault();
        alert('Please fill in all fields');
    }
});

// WhatsApp API integration
const whatsappApiURL = 'https://api.whatsapp.com/send?phone=593987654321';
document.querySelector('#whatsappButton').onclick = function () {
    window.open(whatsappApiURL, '_blank');
};

// Responsive navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scroll behavior
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});