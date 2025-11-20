export function createSlide(img, id) {
  const box = document.createElement("div");
  box.classList.add("slideshow_image");
  box.dataset.id = id;
  const image = document.createElement("img");
  image.src = img;
  box.append(image);
  return box;
}

export function createChip(id, currentId) {
  const chip = document.createElement("div");
  chip.classList.add("slideshow_chips-items");
  chip.dataset.id = id
  if (currentId === id) {
    chip.classList.add("active");
  }
  return chip;
}

export function setActiveChip(id, chips) {
  for (let child of chips) {
    child.dataset.id == id
      ? child.classList.add("active")
      : child.classList.remove("active");
  }
}

export function toggleDisabledBtn(bool, elements) {
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