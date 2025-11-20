const images = [
  "./assets/cute-cat-a.webp",
  "./assets/cute-cat-b.webp",
  "./assets/cute-cat-c.webp",
  "./assets/cute-cat-d.webp",
];

// Write your code here //

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
    slideshowChips.append(createChip(id));
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
    autoSwitchImg(this,timer);
  });
  autoBackward.addEventListener("click", function () {
    autoSwitchImg(this,timer);
  });
  setTimer.addEventListener("change", function(){
    timer = this.value;
  })
});

// Helpers.

// Populate DOM.
function createSlide(img, id) {
  const box = document.createElement("div");
  box.classList.add("slideshow_image");
  box.dataset.id = id;
  const image = document.createElement("img");
  image.src = img;
  box.append(image);
  return box;
}

function createChip(id) {
  const chip = document.createElement("div");
  chip.classList.add("slideshow_chips-items");
  chip.dataset.id = id
  if (currentId === id) {
    chip.classList.add("active");
  }
  return chip;
}
function setActiveChip(id) {
  for (let child of chips.children) {
    child.dataset.id == id
      ? child.classList.add("active")
      : child.classList.remove("active");
  }
}

// Events.

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
// Used in autoSwitchImg function.
function toggleDisabledBtn(bool, elements) {
  if (bool) {
    elements.forEach((el) => {
      el.classList.add("disabled");
      el.classList.remove("active");
    });
  } else {
    elements.forEach((el) => {
      el.classList.remove("disabled");
    });
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
  setActiveChip(currentId);
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
