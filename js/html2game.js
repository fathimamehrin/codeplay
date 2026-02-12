const cards = document.querySelectorAll(".card");
let index = 0;

function check() {
  const card = cards[index];
  const input = card.querySelector("input");
  if (!input) return;

  const correct = input.dataset.answer.toLowerCase();
  const user = input.value.toLowerCase().trim();

  if (user === correct) {
    card.classList.add("exit");
    setTimeout(() => {
      card.classList.remove("active");
      index++;
      cards[index].classList.add("active");
    }, 300);
  } else {
    input.style.border = "2px solid red";
    setTimeout(() => input.style.border = "", 500);
  }
}
