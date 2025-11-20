const images = [
  "./assets/cute-cat-a.webp",
  "./assets/cute-cat-b.webp",
  "./assets/cute-cat-c.webp",
  "./assets/cute-cat-d.webp",
];

// Write your code here //
// Translation.
// values variables.
const step = 800;
let currentId = 0;
const lg = images.length - 1;
// backward & fowards.
let autoSwitchActive = false;
let interval;
// DOM variables.
const slideshowImgs = document.querySelector(".slideshow_images");
const slideshowChips = document.querySelector(".slideshow_chips");
const foward = document.getElementById("forward-btn");
const backward = document.getElementById("backward-btn");
const autoFoward = document.getElementById("auto-forward-btn");
const autoBackward = document.getElementById("auto-backward-btn");
const chips = document.querySelector(".slideshow_chips");
// Go!
window.addEventListener("load", () => {
  images.forEach((img, id) => {
    slideshowImgs.append(createSlide(img, id));
    slideshowChips.append(createChip(id));
  });
  foward.addEventListener("click", function () {
    switchImg(this);
  });
  backward.addEventListener("click", function () {
    switchImg(this);
  });
  autoFoward.addEventListener("click", function () {
    autoSwitchImg(this);
  });
  autoBackward.addEventListener("click", function () {
    autoSwitchImg(this);
  });
});

// Populate DOM.
function createSlide(img, id) {
  const box = document.createElement("div");
  box.setAttribute("data-id", id);
  box.classList.add("slideshow_image");
  const image = document.createElement("img");
  image.src = img;
  image.alt = `cat ${id}`;
  box.append(image);
  return box;
}
function createChip(id) {
  const chip = document.createElement("div");
  chip.setAttribute("data-id", id);
  chip.classList.add("slideshow_chips-items");
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
// Used in switchImg function.
function translateSlideShow() {
  slideshowImgs.style.transform = `translateX(${currentId * -step}px)`;
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
  console.log("switchImg", el);
  switch (el.id) {
    case "forward-btn":
      currentId < lg ? currentId++ : (currentId = 0);
      break;
    case "backward-btn":
      currentId === 0 ? (currentId = lg) : currentId--;
      break;
  }
  setActiveChip(currentId);
  translateSlideShow();
}
// Auto.
function autoSwitchImg(el, timer = 2000) {
  autoSwitchActive = !autoSwitchActive;
  el.classList.toggle("active");
  const elements = [backward, foward];
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
    interval = setInterval(() => switchImg(switcher), 2000);
  } else {
    toggleDisabledBtn(false, elements);
    clearInterval(interval);
  }
}
