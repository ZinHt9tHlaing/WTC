const btnPink = document.querySelector("#btnPink");

btnPink.classList.add("one");
btnPink.classList.add("two");

let toggle = false;

one.style.background = "pink";
two.style.background = "red";

btnPink.addEventListener("click", () => {
  if (!toggle) {
    one.style.background = "red";
    two.style.background = "pink";
  } else {
    one.style.background = "pink";
    two.style.background = "red";
  }
  toggle = !toggle;
});

// btnPink.addEventListener("dblclick", () => {
//   one.style.background = "gray";
//   two.style.background = "yellow";
// });

