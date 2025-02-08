const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navItems = document.querySelectorAll(".nav__item");

// Open & close menu on toggle button click
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--open");
    changeIcon();
});

// Close the menu when a user clicks on a nav item
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        if (navMenu.classList.contains("nav__menu--open")) {
            navMenu.classList.remove("nav__menu--open");
        }
        changeIcon();
    });
});

// Function to change the icon
function changeIcon() {
    if (navMenu.classList.contains("nav__menu--open")) {
        // Replace the menu icon with the close icon
        navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
    } else {
        // Replace the close icon with the menu icon
        navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
    }
}


// scrollel reveal 

const sr = ScrollReveal({
   duration: 2000,
   distance: "100px",
   delay: 400,
   reset: false,
})

sr.reveal(".hero__content, .about__content");
sr.reveal(".hero__img",{orgin:"top"});

sr.reveal(".hero__info-wrapper, .skills__title,.skills__content,.qualification__item,.qualification__item,.service__card,.project__content,.testimonial__wrapper,.footer__content",{display:500,interval:100,});
sr.reveal(".qualification_footer-text,.contact__content",{orgin:"left",});
sr.reveal(".qualification__footer .btn,.contact__btn",{orgin:"right"});
