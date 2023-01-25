// Variables
const btn = document.getElementById('menu_btn');
const nav = document.getElementById('menu');
const inputForm = document.getElementById('email_input');
const goBtn = document.getElementById('go_btn');
const error = document.querySelector('.error');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
});

// Swiper for testinomials
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    breakpoints: {
        600: {
            slidesPerView: 1.45,
            spaceBetween: 0,
        },
        992: {
            initialSlide: 1,
            slidesPerView: 2.43,
            spaceBetween: 40,
        },
    },
    cssmode: true,
    mousewheel: true,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        centeredSlides: true,
        clickable: true,
    },
});

// Regular Expression for validity of email
let regex = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;

// EventListener for form to show error on wrong email format
goBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (!inputForm.value) {
        error.classList.add("show");
        inputForm.classList.add("show");
        error.innerHTML = "Enter Email";
        return;
    }
    if (!regex.test(inputForm.value)) {
        error.classList.add("show");
        inputForm.classList.add("show");
        error.innerHTML = "Whoops, make sure it's an email";
        return;
    }

    error.classList.remove("show");
    inputForm.classList.remove("show");
    error.innerHTML = "";
    inputForm.value = "";
    return;

})