import { images } from "./includes/images.js";
import {
  createSlide,
  createChip,
  setActiveChip,
  toggleDisabledBtn,
} from "./includes/dom.js";

// values.
const step = 800;
let currentId = 0;
let timer = 2000;
const lg = images.length - 1;

// backward & fowards.
let slides = [];
let autoSwitchActive = false;
let interval;

// DOM.
const slideshowImgs = document.querySelector(".slideshow_images");
const slideshowChips = document.querySelector(".slideshow_chips");
const foward = document.getElementById("forward-btn");
const backward = document.getElementById("backward-btn");
const autoFoward = document.getElementById("auto-forward-btn");
const autoBackward = document.getElementById("auto-backward-btn");
const chips = document.querySelector(".slideshow_chips");
const setTimer = document.getElementById("timer");
// Go!
window.addEventListener("load", () => {
  images.forEach((img, id) => {
    slides.push(createSlide(img, id));
    slideshowChips.append(createChip(id, currentId));
  });
  // Init : add first slide.
  slideshowImgs.appendChild(slides[0]);

  // Events.
  foward.addEventListener("click", function () {
    switchImg(this);
  });
  backward.addEventListener("click", function () {
    switchImg(this);
  });
  autoFoward.addEventListener("click", function () {
    autoSwitchImg(this, timer);
  });
  autoBackward.addEventListener("click", function () {
    autoSwitchImg(this, timer);
  });
  setTimer.addEventListener("change", function () {
    timer = this.value;
  });
});

// Helpers.
// Slider animation.
function translateSlideShow(direction) {
  // Forward.
  if (direction === "next") {
    slideshowImgs.append(slides[currentId]);
    slideshowImgs.style.transition = "transform 0.5s";
    slideshowImgs.style.transform = `translateX(${-step}px)`;

    slideshowImgs.addEventListener(
      "transitionend",
      function cleanup() {
        slideshowImgs.removeChild(slideshowImgs.firstElementChild);
        slideshowImgs.style.transition = "none";
        slideshowImgs.style.transform = "translateX(0)";
      },
      { once: true }
    );
  }
  // Backward.
  else {
    slideshowImgs.style.transition = "none";
    slideshowImgs.style.transform = `translateX(${-step}px)`;
    // Prepend.
    slideshowImgs.prepend(slides[currentId]);
    // Force reflow to trigger the transition.
    void slideshowImgs.offsetWidth;

    /* 
     * requestAnimationFrame (rAF) is a navigator function 
     * execute a function before navigator refresh
    
    requestAnimationFrame(() => {
      slideshowImgs.style.transition = "transform 0.5s";
      slideshowImgs.style.transform = `translateX(0)`;
    });*/

    // Lancer la transition vers 0
    slideshowImgs.style.transition = "transform 0.5s";
    slideshowImgs.style.transform = `translateX(0)`;

    // Remove next slide.
    slideshowImgs.addEventListener(
      "transitionend",
      function cleanup() {
        slideshowImgs.removeChild(slideshowImgs.lastElementChild);
        slideshowImgs.style.transition = "none";
      },
      { once: true }
    );
  }
}

// Manual.
function switchImg(el) {
  let direction;
  switch (el.id) {
    case "forward-btn":
      direction = "next";
      currentId = currentId < lg ? currentId + 1 : 0;
      break;
    case "backward-btn":
      direction = "prev";
      currentId = currentId === 0 ? lg : currentId - 1;
      break;
  }
  setActiveChip(currentId, chips.children);
  translateSlideShow(direction);
}
// Auto.
function autoSwitchImg(el, time) {
  autoSwitchActive = !autoSwitchActive;
  el.classList.toggle("active");
  const elements = [backward, foward, setTimer.parentElement];
  let switcher;
  switch (el.id) {
    case "auto-forward-btn":
      elements.push(autoBackward);
      switcher = foward;
      break;
    case "auto-backward-btn":
      elements.push(autoFoward);
      switcher = backward;
      break;
  }
  if (autoSwitchActive === true) {
    toggleDisabledBtn(true, elements);
    interval = setInterval(() => switchImg(switcher), time);
  } else {
    toggleDisabledBtn(false, elements);
    clearInterval(interval);
  }
}
