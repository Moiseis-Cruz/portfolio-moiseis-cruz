window.scroll({
    top: 0,
    behavior: "smooth"
});

const togglerBtn = document.getElementById("toggler-button");
const contentBtn = document.getElementById("button-content");
const body = document.querySelector("body");

togglerBtn.addEventListener("change", () => {
    if(togglerBtn.checked){
        contentBtn.innerHTML = `<i class="fa-regular fa-moon"></i>`
        body.setAttribute("data-themes", "dark");
    }else{
        contentBtn.innerHTML = `<i class="fa-sharp fa-regular fa-sun"></i>`;
        body.setAttribute("data-themes", "light")
    };
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

let formControls = document.querySelectorAll(".form-control");

let inputs = document.querySelectorAll("#name, #email, #subject, textarea");

contactForm.addEventListener("input", (event) => {
    
    inputs.forEach((input, i) => {
        if(input.value !== ""){
            event.preventDefault();
            formControls[i].classList.remove("invalid");
        };
    });

});

contactForm.addEventListener("submit", (event) => {
    
    inputs.forEach((input, i) => {
        if(input.value === ""){
            event.preventDefault();
            formControls[i].classList.add("invalid");
        };
    });

});
