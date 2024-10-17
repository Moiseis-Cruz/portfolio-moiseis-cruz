window.scroll({
    top: 0,
    behavior: "smooth"
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header-buttons-content');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('open');
    });
});


/* VALIDAÇÃO DE FORMULÁRIO */

const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", () => {
    console.log(`Clicou`);
});


/*

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

*/