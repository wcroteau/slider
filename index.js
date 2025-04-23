const prevButtonEls = document.querySelectorAll(".prev");
const nextButtonEls = document.querySelectorAll(".next");

const active = {
  list0: 0,
  list1: 0,
  list2: 0,
  list3: 0,
  list4: 0,
  list5: 0,
};
prevButtonEls.forEach((btn) =>
  btn.addEventListener("click", () => slide(btn, -1))
);
nextButtonEls.forEach((btn) =>
  btn.addEventListener("click", () => slide(btn, 1))
);

function slide(btnEl, offset) {
  const listId = btnEl.closest(".slider").querySelector(".list").dataset.listid;

  active[`list${listId}`] += offset;
  if (active[`list${listId}`] < 0) {
    active[`list${listId}`] = 4;
  } else if (active[`list${listId}`] > 4) {
    active[`list${listId}`] = 0;
  }

  const newLeft = `${active[`list${listId}`] * -300}px`;

  btnEl.closest(".slider").querySelector(".items").style.left = newLeft;

  btnEl
    .closest(".slider")
    .querySelectorAll("li")
    .forEach((dot, i) => {
      if (i === active[`list${listId}`]) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
}
