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
