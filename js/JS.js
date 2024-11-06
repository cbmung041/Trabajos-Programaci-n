const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-visible');
});

const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');

form.addEventListener('submit', function(e) {
    if (emailInput.value === '') {
        e.preventDefault();
        alert('Por favor, introduce un correo electrónico válido.');
    }
});
