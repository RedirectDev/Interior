"use strict";
/* Changing color of header im scroll */
window.addEventListener("scroll",  ()=> {
  const elements = document.querySelector(".header");
  if (window.scrollY >= 2900) {
    elements.style.color = "#fff";
  } else if (window.scrollY <= 2900) {
    elements.style.color = "#000";
  }
});
/* Selectors for changing dimesion of images in icon hover */
const iconOne = document.querySelector(".icon_one");
const iconTwo = document.querySelector(".icon_two");
const iconThree = document.querySelector(".icon_three");
const iconFour = document.querySelector(".icon_four");
const iconFive = document.querySelector(".icon_five");

const imgOne = document.querySelector(".img_one");
const imgTwo = document.querySelector(".img_two");
const imgThree = document.querySelector(".img_three");
const imgFour = document.querySelector(".img_four");
const imgFive = document.querySelector(".img_five");



/* Icons thant changing dimasion of photos */
iconOne.addEventListener("mouseover", () => {
  imgOne.style.width = "33.4%";
});

iconOne.addEventListener("mouseout", () => {
  imgOne.style.width = "7%";
});

iconTwo.addEventListener("mouseover", () => {
  imgTwo.style.width = "33.4%";
  imgOne.style.display = "none";
});

iconTwo.addEventListener("mouseout", () => {
  imgTwo.style.width = "7%";
  imgOne.style.display = "flex";
});

iconThree.addEventListener("mouseover", () => {
  imgThree.style.width = "33.4%";
  imgOne.style.display = "none";
  imgTwo.style.display = "none";
});

iconThree.addEventListener("mouseout", () => {
  imgThree.style.width = "7%";
  imgOne.style.display = "flex";
  imgTwo.style.display = "flex";
});

iconFour.addEventListener("mouseover", () => {
  imgFour.style.width = "33.4%";
  imgOne.style.display = "none";
  imgTwo.style.display = "none";
  imgThree.style.display = "none";
});

iconFour.addEventListener("mouseout", () => {
  imgFour.style.width = "7%";
  imgOne.style.display = "flex";
  imgTwo.style.display = "flex";
  imgThree.style.display = "flex";
});
iconFive.addEventListener("mouseover", () => {
  imgFive.style.width = "33.4%";
  imgOne.style.display = "none";
  imgTwo.style.display = "none";
  imgThree.style.display = "none";
  imgFour.style.display = "none";
});

iconFive.addEventListener("mouseout", () => {
  imgFive.style.width = "7%";
  imgOne.style.display = "flex";
  imgTwo.style.display = "flex";
  imgThree.style.display = "flex";
  imgFour.style.display = "flex";
});

/* Fading H1 element in scroll */
window.addEventListener("scroll",  ()=> {
  const elements = document.querySelector(".section_element");
  if (window.scrollY >= 600) {
    elements.classList.add("section_element_show");
  } else if (window.scrollY <= 1500) {
    elements.classList.remove("section_element_show");
  }
});

/* Fading H1 element in scroll */
window.addEventListener("scroll",  ()=> {
  const elements = document.querySelector(".section_projects");
  if (window.scrollY >= 1500) {
    elements.classList.add("section_projects_show");
  } else if (window.scrollY <= 2000) {
    elements.classList.remove("section_projects_show");
  }
});

const element=addEventListener('scroll',()=>{

})