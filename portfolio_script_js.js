// script.js for Portfolio Website

// Basic interactivity or logging
console.log("Tailwind Portfolio Website Loaded Successfully!");

// Example: Smooth scrolling for navbar links
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
