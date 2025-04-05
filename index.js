// t1
const slider = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");

slider.addEventListener(
  "input",
    _.debounce((event) => {
    image.style.width = `${event.target.value}%`;
  }, 100)
);

// t2
const box = document.getElementById("box");

box.addEventListener(
  "mousemove",
  _.debounce((event) => {   
    box.style.left = event.clientX + "px";
    box.style.top = event.clientY + "px";
  }, 100)
);

// t3
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image-cats");

  const observer = new IntersectionObserver(
    (enters) => {
      enters.forEach((enter) => {
        if (enter.isIntersecting) {
          const img = enter.target;
          img.src = img.getAttribute("data-src");
        }
      });
    },
    { threshold: 0.1 }
  );

  images.forEach((image) => observer.observe(image));
});
