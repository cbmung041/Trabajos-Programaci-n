// 1. Menú responsive para móviles
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-visible');
});

// 2. Desplazamiento suave para enlaces del menú
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

// 3. Validación básica del formulario de suscripción
const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');

form.addEventListener('submit', function(e) {
    if (emailInput.value === '') {
        e.preventDefault();
        alert('Por favor, introduce un correo electrónico válido.');
    }
});
