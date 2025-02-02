const setupTitle = () => {
  const letter = document.querySelector("#site-title .letter");
  const letters = ["a", "e", "i", "o", "u"];
  let counter = 0;
  setInterval(() => {
    letter.textContent = letters[counter];
    counter++;
    if (counter >= letters.length) counter = 0;
  }, 700);
};

let buttons = [];
let contents = [];
let currentButton = null;
const setupAccordion = () => {
  const accordion = document.querySelector(".accordion");
  buttons = accordion.querySelectorAll("button");
  contents = accordion.querySelectorAll(".content");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      buttons.forEach((button) => button.parentElement.classList.remove("active"));
      contents.forEach((content) => (content.style.maxHeight = "0"));
      if (currentButton == button) {
        currentButton = null;
        return;
      }
      button.parentElement.classList.add("active");
      const content = button.parentElement.querySelector(".content");
      content.style.maxHeight = content.scrollHeight + "px";
      currentButton = button;
    });
  });
};

const setupMenu = () => {
  const menuToggle = document.querySelector("#menu-toggle");
  const menuItems = document.querySelectorAll("#menu .item");
  gsap.set(menuToggle, { y: window.innerHeight - 200 });
  const speed = 0.5;
  const tl = gsap.timeline({ paused: true });
  tl.to("#site-title", speed, { y: "-=200%", ease: "power1.inOut" });
  tl.to("#logo-screen", speed, { x: "100%", ease: "power1.inOut" }, `-=${speed}`);
  tl.to("#menu-toggle", speed, { y: "-5vw", rotation: 45 }, `-=${speed / 3}`);
  tl.to(
    menuItems,
    {
      y: "-90vh",
      stagger: 0.06,
    },
    `-=${speed / 2}`
  );

  menuToggle.addEventListener("click", () => {
    if (tl.isActive()) return;
    
    if (menuToggle.classList.contains("active")) {
      tl.reverse();
    } else {
      tl.play();
    }

    menuToggle.classList.toggle("active");
    overflowHidden();
  });
};

const menuToggle = document.querySelector("#menu-toggle");

const overflowHidden = () => {
  if (menuToggle.classList.contains("active")) {
    document.body.style.overflowY = "auto";
  } else {
    document.body.style.overflowY = "hidden";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  setupTitle();
  setupAccordion();
  setupMenu();
  

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

});
