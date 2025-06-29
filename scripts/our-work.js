const gallery = document.querySelector('section#our-work .image-gallery');
const wp = document.querySelector('section#our-work .wrapper');
const row = gallery.querySelector('.image-row');
const btn = gallery.querySelector('.gallery-next-btn');
const images = row.querySelectorAll('img');
const gap = 35;
const timeoutDuration = 2500;
let index = 0;
let timeout;

;function getShift() {
  let shift = 0;
  for (let i = 0; i < index; i++) {
    shift += images[i].clientWidth + gap;
  }
  return shift;
}

;function isLastImageVisible() {
  const rowWidth = row.offsetWidth;
  let remainingWidth = 0;
  for (let i = index; i < images.length; i++) {
    remainingWidth += images[i].clientWidth + (i < images.length - 1 ? gap : 0);
  }
  return remainingWidth <= rowWidth;
}

;function update() {
  clearTimeout(timeout);
  if (isLastImageVisible()) {
    index = 0;
  }
  requestAnimationFrame(() => {
    row.style.transform = "translateX(" + getShift() * -1 + "px)";
  });
  index++;
  timeout = setTimeout(update, timeoutDuration);
}

;function adjustGalleryOffset() {
  if (wrapper && row) {
    const left = wrapper.getBoundingClientRect().left;
    row.style.marginLeft = (-left) + "px";
  }
}
window.addEventListener('resize', adjustGalleryOffset);
window.addEventListener('DOMContentLoaded', adjustGalleryOffset);

;btn.addEventListener('click', update);

timeout = setTimeout(update, timeoutDuration);

;window.addEventListener('resize', update);
