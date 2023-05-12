// This script adds an animation from the library to the first element in each section
AOS.init();
const sections = document.getElementsByTagName("section");
for (const section of sections) {
  section.firstElementChild.setAttribute("data-aos", "fade-up");
  section.firstElementChild.setAttribute("data-aos-duration", 1000);
}

//This script adds an open class for further animation
const burger = document.querySelector(".header__burger");
const navbar = document.querySelector(".header__navbar");

burger.addEventListener("click", (e) => {
  e.preventDefault();

  burger.classList.toggle("active");
  navbar.classList.toggle("open");
});
