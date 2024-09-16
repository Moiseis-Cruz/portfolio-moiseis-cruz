const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header-buttons-content');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle para abrir/fechar o menu hamburguer
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Fechar o menu quando um link for clicado
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('open');
    });
});