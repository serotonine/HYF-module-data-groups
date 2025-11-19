const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "./assets/cute-cat-d.png",
];

// Write your code here //
// Translation.
// values variables.
const step = 800;
let currentId = 0;
const lg = images.length - 1;
// backward & fowards.
let backwardActive = false;
let fowardActive = false;
let interval;
// DOM variables.
const slideshowImgs = document.querySelector(".slideshow_images");
const slideshowChips = document.querySelector(".slideshow_chips");
const foward = document.getElementById("forward-btn");
const backward = document.getElementById("backward-btn");
const autoFoward = document.getElementById("auto-forward-btn");
const autoBackward = document.getElementById("auto-backward-btn");
const chips = document.querySelector(".slideshow_chips");
// Populate DOM.
function createSlide(img, id) {
  const box = document.createElement("div");
  box.setAttribute("data-id", id);
  box.classList.add("slideshow_image");
  const image = document.createElement("img");
  image.src = img;
  box.append(image);
  return box;
}
function setActiveChip(id) {
  for (let child of chips.children) {
    child.dataset.id == id
      ? child.classList.add("active")
      : child.classList.remove("active");
  }
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
// Events.
function translateSlideShow() {
  slideshowImgs.style.transform = `translateX(${currentId * -step}px)`;
}

function goToNextImg() {
  currentId < lg ? currentId++ : (currentId = 0);
  setActiveChip(currentId);
  translateSlideShow();
}
function goToPrevImg() {
  currentId === 0 ? (currentId = lg) : currentId--;
  translateSlideShow();
}
//
function toggleManualNav(bool, elements) {
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
function backwardAnimation(timer = 2000) {
  backwardActive = !backwardActive;
  autoBackward.classList.toggle("active");
  const elements = [backward, foward, autoFoward];
  if (backwardActive === true) {
    toggleManualNav(true, elements);
    interval = setInterval(goToPrevImg, 2000);
  } else {
    toggleManualNav(false, elements);
    clearInterval(interval);
  }
}
function fowardAnimation() {
  fowardActive = !fowardActive;
  autoFoward.classList.toggle("active");
  const elements = [backward, foward, autoBackward];
  if (fowardActive) {
    toggleManualNav(true, elements);
    interval = setInterval(goToNextImg, 2000);
  } else {
    toggleManualNav(false, elements);
    clearInterval(interval);
  }
}
// Go!
window.addEventListener("load", () => {
  images.forEach((img, id) => {
    slideshowImgs.append(createSlide(img, id));
    slideshowChips.append(createChip(id));
  });
  foward.addEventListener("click", goToNextImg);
  backward.addEventListener("click", goToPrevImg);
  autoFoward.addEventListener("click", fowardAnimation);
  autoBackward.addEventListener("click", backwardAnimation);
});
