const listEls = document.querySelectorAll(".list");
const dotsEls = document.querySelectorAll(".dots");
const prevButtonEls = document.querySelectorAll(".prev");
const nextButtonEls = document.querySelectorAll(".next");

let active = 0;

prevButtonEls.forEach((btn) => btn.addEventListener("click", () => slide(-1)));
nextButtonEls.forEach((btn) => btn.addEventListener("click", () => slide(1)));

function slide(offset) {
  console.log("Slide", offset);
  active += offset;
  if (active < 0) {
    active = 4;
  } else if (active > 4) {
    active = 0;
  }

  const newLeft = `${active * -300}px`;

  listEls.forEach((list) => {
    list.querySelector(".items").style.left = newLeft;
  });

  dotsEls.forEach((dots) => {
    dots.querySelectorAll("li").forEach((dot, i) => {
      if (i === active) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  });
}
