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


contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputs = document.querySelectorAll(".typing-input");

    inputs.forEach((input, i) => {
        if(input.value === ""){
            inputs[i].classList.add("invalid")
        }
    });

});
