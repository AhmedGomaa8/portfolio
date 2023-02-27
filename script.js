let menu = document.getElementById("burger-menu");
let ulMenu = document.getElementById("ul-menu");

menu.addEventListener("click", () => {
  ulMenu.classList.toggle("drop");
});

//slide

let slides = document.querySelectorAll(".slide");
let aboutSlides = document.querySelectorAll(".about-slide");
let faders = document.querySelectorAll(".fade");
let projectSlide = document.querySelectorAll(".project-slide");

let option = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px",
};

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    }
  });
}, option);

slides.forEach((slide) => {
  observer.observe(slide);
});
aboutSlides.forEach((slide) => {
  observer.observe(slide);
});
faders.forEach((fade) => {
  observer.observe(fade);
});
projectSlide.forEach((slide) => {
  observer.observe(slide);
});

//nav onscroll

let nav = document.getElementById("nav-bar");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 400) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});
